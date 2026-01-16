import "./AddProduct.css";
import uploadArea from "../assets/upload_area.svg";
import { useState, type ChangeEvent } from "react";

interface ProductDetails {
  name: string;
  image: string;
  category: string;
  newPrice: string | number;
  oldPrice: string | number;
}

function AddProduct() {
  const [image, setImage] = useState<File | null>(null);
  const [products, setProducts] = useState<ProductDetails>({
    name: "",
    image: "",
    category: "iphone",
    newPrice: "",
    oldPrice: "",
  });

  const handleImage = (e: ChangeEvent<HTMLInputElement>): void => {
    // console.log(e.target.files);
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setProducts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  interface UploadResponse {
    success: boolean;
    imageUrl: string;
  }

  const handleAddProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(products);

    // I ADDED THIS(CHECK LATER)
    // const { image: _, ...requiredFields } = products;
    // if (Object.values(requiredFields).some((val) => val === "") || !image) {
    //   return alert("Please fill all fields and select an image");
    // }

    // Here I linked this `AddProduct` Page with my Backend

    // Uploading image to backend
    let responseData: UploadResponse = { success: false, imageUrl: "" };
    const product = { ...products };
    const formData = new FormData();
    if (!image) return console.error("No image selected");
    formData.append("product", image);
    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        responseData = data;
      });
    if (responseData.success) {
      product.image = responseData.imageUrl;
      console.log(product);
      //-----
      await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) alert("Product added");
          else alert("Failed");
        });
    }
  };

  //Async await:
  // const handleAddProduct = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log(products);

  //   // Here I linked this `AddProduct` Page with my Backend

  //   if (!image) return console.error("No image selected");

  //   const product = { ...products };
  //   const formData = new FormData();
  //   formData.append("product", image);

  //   // 1. Uploading image to backend
  //   const uploadRes = await fetch("http://localhost:4000/upload", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //     },
  //     body: formData,
  //   });

  //   const responseData: UploadResponse = await uploadRes.json();

  //   if (responseData.success) {
  //     product.image = responseData.imageUrl;
  //     console.log(product);

  //     // 2. Adding product to database
  //     const addRes = await fetch("http://localhost:4000/addproduct", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(product),
  //     });

  //     const data = await addRes.json();

  //     if (data.success) {
  //       alert("Product added");
  //     } else {
  //       alert("Failed");
  //     }
  //   }
  // };

  return (
    <form
      onSubmit={(e) => {
        handleAddProduct(e);
      }}
      className="form-add-product"
    >
      <div className="add-product-item-field">
        <p>Product Title</p>
        <input
          value={products.name}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Type here"
        />
      </div>
      <div className="add-product-price">
        <div className="add-product-item-field">
          <p>Price</p>
          <input
            value={products.oldPrice}
            onChange={handleChange}
            type="number"
            min={0}
            name="oldPrice"
            placeholder="Type here"
          />
        </div>
        <div className="add-product-item-field">
          <p>Offer Price</p>
          <input
            value={products.newPrice}
            onChange={handleChange}
            type="number"
            min={0}
            name="newPrice"
            placeholder="Type here"
          />
        </div>
      </div>
      {/* ------------------- */}
      <div className="add-product-item-field">
        <p>Product category</p>
        <select
          value={products.category}
          onChange={handleChange}
          name="category"
          className="add-product-selector"
        >
          <option value="iphone">Iphone</option>
          <option value="galaxy">Galaxy</option>
        </select>
      </div>
      {/* ---------------- */}
      <div className="add-product-item-field">
        <label htmlFor="file-input">
          <img
            className="add-product-thumbnail-img"
            src={image ? URL.createObjectURL(image) : uploadArea}
            alt=""
          />
        </label>
        <input
          onChange={handleImage}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      {/* ----------------- */}
      <button type="submit" className="add-product-btn">
        ADD
      </button>
    </form>
  );
}

export default AddProduct;
