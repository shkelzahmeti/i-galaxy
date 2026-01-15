import "./DescriptionBox.css";

function DescriptionBox() {
  return (
    <div className="description-box">
      <div className="description-box-navigator">
        <div className="description-box-nav-box">Description</div>
        <div className="description-box-nav-box fade">Reviews (122)</div>
      </div>
      <div className="description-box-description">
        <p>
          A 6.7-inch AMOLED display with 120Hz refresh rate is powered by an
          efficient octa-core processor with 8GB RAM and 256GB storage. The
          device features a 50MP triple camera system, a 32MP front camera, and
          a 5000mAh battery with fast charging.
        </p>
        <p>
          It runs the latest version with 5G and Wi-Fi 6E support, featuring an
          in-display fingerprint sensor and a slim, water-resistant design
          focused on everyday usability.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
