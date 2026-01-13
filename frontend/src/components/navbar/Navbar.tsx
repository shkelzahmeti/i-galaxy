import "./Navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState("shop");
  return (
    <section className="section-navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        {/* <p>iGALAXY</p> */}
      </div>
      <nav className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop</Link> {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("iphone")}>
          <Link to="/iphones">iPhone</Link> {menu === "iphone" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("galaxy")}>
          <Link to="/galaxies">Galaxy</Link>{" "}
          {menu === "galaxy" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("repair")}>
          <Link to="/repair">Repair</Link> {menu === "repair" ? <hr /> : <></>}
        </li>
      </nav>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </section>
  );
}

export default Navbar;
