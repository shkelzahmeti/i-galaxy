import "./Hero.css";
// import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";

function Hero() {
  return (
    <section className="section-hero">
      <div className="hero-left">
        <h2>NEXT-GEN ARRIVALS</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            {/* <img src={hand_icon} alt="" /> */}
          </div>
          <p>smartphones</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Models</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      {/* ////////////////////////////////// */}
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </section>
  );
}

export default Hero;
