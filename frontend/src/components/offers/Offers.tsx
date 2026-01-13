import "./Offers.css";
import exclusive_image from "../assets/exclusive_image.png";

function Offers() {
  return (
    <section className="section-offers">
      <div className="offers-left">
        <h2>Exclusive</h2>
        <h2>Offers For You</h2>
        <p>ONLY ON BEST SELLERS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </section>
  );
}

export default Offers;
