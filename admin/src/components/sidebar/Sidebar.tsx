import { Link } from "react-router-dom";
import "./Sidebar.css";
import addProductIcon from "../assets/product_cart.svg";
import listProductIcon from "../assets/product_list_icon.svg";
import type { JSX } from "react";

function Sidebar() {
  const link = (to: string, src: string, title: string): JSX.Element => {
    return (
      <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
        <div className="sidebar-item">
          <img src={src} alt="" />
          <p>{title}</p>
        </div>
      </Link>
    );
  };
  /////
  return (
    <aside className="sidebar">
      {link("/addproduct", addProductIcon, "Add Product")}
      {link("/listproduct", listProductIcon, "Product List")}
    </aside>
  );
}

export default Sidebar;
