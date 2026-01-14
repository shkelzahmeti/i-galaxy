import "./Footer.css";
import logo from "../assets/logo.png";
import instagram_icon from "../assets/instagram_icon.png";
import pinterest_icon from "../assets/pinterest_icon.png";
import whatsapp_icon from "../assets/whatsapp_icon.png";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <section className="section-footer">
      <div className="footer-logo">
        <img src={logo} alt="" />
        {/* <p>iGalaxy</p> */}
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pinterest_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright © {year}. All rights reserved.</p>
      </div>
    </section>
  );
}

export default Footer;
