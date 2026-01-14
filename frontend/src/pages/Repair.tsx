import React from "react";
import CrackedScreen from "../components/repair/CrackedScreen";
import phoneImg from "../components/assets/product_36.png";
import cracksImg from "../components/assets/cracks.png";
import "./Repair.css";

function Repair() {
  return (
    <section className="section-repair">
      <div className="repair-text">
        <h2>
          Repair Your <span>Device</span> Like New Again
        </h2>
        <p>
          Fast, reliable, and <span>guaranteed</span> service for your damaged
          phone.
        </p>
        <a href="tel:+1234567890" className="repair-button">
          Contact Us
        </a>
      </div>
      <div className="cracked-phone">
        <CrackedScreen
          width={260}
          height={480}
          image={phoneImg}
          crackedSvg={cracksImg}
          startPercent={0.1}
        />
      </div>
    </section>
  );
}

export default Repair;
