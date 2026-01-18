import "./Navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ShopContext } from "../../context/ShopContextProvider";
import { toast } from "react-toastify";

function Navbar() {
  const { getTotalCartItems } = useContext(ShopContext)!;
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveMenu = () => {
    if (location.pathname === "/") return "shop";
    if (location.pathname.startsWith("/iphones")) return "iphone";
    if (location.pathname.startsWith("/galaxies")) return "galaxy";
    if (location.pathname.startsWith("/repair")) return "repair";
    return null;
  };

  const menu = getActiveMenu();

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    toast.success("You've logged out");
    navigate("/");
  };

  return (
    <section className="section-navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>

      <nav className="nav-menu">
        <li>
          <Link to="/">Shop</Link>
          {menu === "shop" && <hr />}
        </li>

        <li>
          <Link to="/iphones">iPhone</Link>
          {menu === "iphone" && <hr />}
        </li>

        <li>
          <Link to="/galaxies">Galaxy</Link>
          {menu === "galaxy" && <hr />}
        </li>

        <li>
          <Link to="/repair">Repair</Link>
          {menu === "repair" && <hr />}
        </li>
      </nav>

      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button onClick={handleLogout}>Log Out</button>
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
