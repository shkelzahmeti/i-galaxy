import React, { useState, useEffect } from "react";
import CrackedScreen from "../components/cracked-screen/CrackedScreen";
import phoneImg from "../components/assets/product_36.png";
import cracksImg from "../components/assets/cracks.png";
import "./css/Repair.css";

function Repair() {
  const [phoneSize, setPhoneSize] = useState({ width: 260, height: 480 });

  useEffect(() => {
    const updateSize = () => {
      const vw = window.innerWidth;
      if (vw < 500) {
        setPhoneSize({ width: 140, height: 280 });
      } else if (vw < 800) {
        setPhoneSize({ width: 220, height: 400 });
      } else {
        setPhoneSize({ width: 260, height: 480 });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

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
          width={phoneSize.width}
          height={phoneSize.height}
          image={phoneImg}
          crackedSvg={cracksImg}
          startPercent={0.1}
        />
      </div>
    </section>
  );
}

export default Repair;
