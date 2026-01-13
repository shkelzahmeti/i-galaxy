import "./Newsletter.css";

function NewsLetter() {
  return (
    <section className="section-newsletter">
      <h2>Get Exclusive Offers On Your Email</h2>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="Your Email Address" />
        <button>Subscribe</button>
      </div>
    </section>
  );
}

export default NewsLetter;
