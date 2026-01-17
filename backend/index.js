const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

//Database connection with MongoDB:

mongoose.connect(
  "mongodb+srv://imshkelz_db_user:8Rsv3Sej3I5hnOzI@cluster0.rbjwb9d.mongodb.net/i-galaxy",
);

//API Creation
app.listen(port, (error) => {
  if (!error) {
    console.log("Server Running on Port " + port);
  } else {
    console.log("Error: " + error);
  }
});

app.get("/", (req, res) => {
  res.send("Express App is Running");
});

// Image Storage Engine:
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`,
    );
  },
});

const upload = multer({ storage: storage });

// Creating Upload Endpoint for Images:
app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    imageUrl: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

// Schema for Creating Products:
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: { type: String, required: true },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  newPrice: {
    type: Number,
    required: true,
  },
  oldPrice: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

// Adding Product to Database:
app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let lastProductArray = products.slice(-1);
    let lastProduct = lastProductArray[0];
    id = lastProduct.id + 1;
  } else {
    id = 1;
  }
  const product = new Product({
    // id: req.body.id,
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    newPrice: req.body.newPrice,
    oldPrice: req.body.oldPrice,
  });
  console.log(product);
  await product.save();
  console.log("Saved");
  res.json({
    success: true,
    name: req.body.name,
  });
});

// Creating API for Deleting Products:
app.post("/remove", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("Removed");
  res.json({ success: true, name: req.body.name });
});

// Creating API for Getting All Products:
app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  console.log("All Products Fetched");
  res.send(products);
});

//////////////////// Creating Endpoints for User /////////////////

const Users = mongoose.model("Users", {
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

// Creating Endpoint for User Signup:
app.post("/signup", async (req, res) => {
  const check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res.status(400).json({
      success: false,
      errors: "User with that email already exists",
    });
  }
  const cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });

  await user.save();

  const data = {
    user: {
      id: user.id,
    },
  };

  const token = jwt.sign(data, "secretStore");

  res.json({ success: true, token });
});

// Creating Endpoint for User Login:
app.post("/login", async (req, res) => {
  const user = await Users.findOne({ email: req.body.email });
  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "secretStore");
      res.json({ success: true, token });
    } else {
      res.json({
        success: false,
        errors: "Wrong password",
      });
    }
  } else {
    res.json({
      success: false,
      errors: "Wrong Email Address",
    });
  }
});

// Creating Endpoint for NewSmartphones Data:
app.get("/newsmartphones", async (req, res) => {
  const products = await Product.find({});
  const newSmartphones = products.slice(1).slice(-8);
  console.log("New Smartphones Fetched ");
  res.send(newSmartphones);
});

// Creating Endpoint for Popular:
app.get("/popular", async (req, res) => {
  const products = await Product.find({
    category: "iphone",
  });
  const popular = products.slice(0, 4);
  console.log("Popular Fetched");
  res.send(popular);
});

// RUN THE SERVER:
// Type `node .\index.js` in Terminal to Run the Server,
// then on Browser: `localhost:4000`

// USING THESE ENDPOINTS WE'LL CREATE THE ADMIN PANEL
// FOR OUR WEBSITE.
