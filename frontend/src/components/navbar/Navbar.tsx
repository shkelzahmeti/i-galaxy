import "./Navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContextProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext)!;
  const navigate = useNavigate();
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
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              navigate("/");
              toast.success("You've logged out");
            }}
          >
            Log Out
          </button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </section>
  );
}

export default Navbar;
