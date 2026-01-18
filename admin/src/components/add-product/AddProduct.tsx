import "./AddProduct.css";
import uploadArea from "../assets/upload_area.svg";
import { useState, useRef, type ChangeEvent } from "react";
import { toast } from "react-toastify";

interface ProductDetails {
  name: string;
  image: string;
  category: string;
  newPrice: string | number;
  oldPrice: string | number;
}

const initialState = {
  name: "",
  image: "",
  category: "iphone",
  newPrice: "",
  oldPrice: "",
};

function AddProduct() {
  const [image, setImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [products, setProducts] = useState<ProductDetails>(initialState);

  const handleImage = (e: ChangeEvent<HTMLInputElement>): void => {
    // console.log(e.target.files);
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
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

    // VALIDATION:
    const { image: _, ...requiredFields } = products;
    if (Object.values(requiredFields).some((val) => val === "") || !image) {
      return alert("Please fill the fields and select your smartphone image");
    }

    try {
      // Here I linked this `AddProduct` Page with my Backend

      // Uploading image to backend
      let responseData: UploadResponse = { success: false, imageUrl: "" };
      const product = { ...products };
      const formData = new FormData();
      if (!image) return console.error("No image selected");
      formData.append("product", image);

      const uploadRes = await fetch("http://localhost:4000/upload", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      responseData = await uploadRes.json();

      if (responseData.success) {
        product.image = responseData.imageUrl;
        console.log(product);

        const addRes = await fetch("http://localhost:4000/addproduct", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        });

        const data = await addRes.json();

        if (data.success) {
          setProducts(initialState);
          setImage(null);
          if (fileInputRef.current) fileInputRef.current.value = "";
          // alert("Product added");
          toast.success("Your product has been added");
        } else {
          // alert("Failed");
          throw new Error("Failed to add product");
        }
      }
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    }
  };

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
          ref={fileInputRef}
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
