import React from "react";
import { useEffect, useState } from "react";
import "./ListProduct.css";
import crossIcon from "../assets/cross_icon.png";
import { toast } from "react-toastify";

interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  newPrice: string | number;
  oldPrice: string | number;
}

function ListProduct() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  const fetchData = async () => {
    await fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRemoveProduct = async (id: number) => {
    await fetch("http://localhost:4000/remove", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    toast.success("Product deleted");
    await fetchData();
  };

  return (
    <section className="section-list-product">
      <h2>All Products</h2>
      <div className="list-product-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>

      <div className="list-product-all-products">
        <hr />
        {allProducts.map((product) => {
          return (
            <React.Fragment key={product.id}>
              <div className="list-product-format-main list-product-format">
                <img className="list-product-icon" src={product.image} alt="" />
                <p>{product.name}</p>
                <p>${product.oldPrice}</p>
                <p>${product.newPrice}</p>
                <p>{product.category}</p>
                <img
                  onClick={() => {
                    handleRemoveProduct(product.id);
                  }}
                  className="list-product-remove-icon"
                  src={crossIcon}
                  alt=""
                />
              </div>
              <hr />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}

export default ListProduct;
