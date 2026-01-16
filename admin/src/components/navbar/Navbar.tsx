import "./Navbar.css";
import navLogo from "../assets/nav-logo.png";
import navProfile from "../assets/nav-profile.svg";

function Navbar() {
  return (
    <section className="section-navbar">
      <img src={navLogo} alt="" className="nav-logo" />
      <img src={navProfile} alt="" className="nav-profile" />
    </section>
  );
}

export default Navbar;
