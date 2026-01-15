import type { Product } from "../../types/product";
import "./ProductDisplay.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";

interface ProductDisplayProps {
  product: Product | undefined;
}
function ProductDisplay({ product }: ProductDisplayProps) {
  const { addToCart } = useContext(ShopContext);
  return (
    <section className="section-product-display">
      <div className="product-display-left">
        <div className="product-display-img-list">
          <img src={product?.image} alt="" />
          <img src={product?.image} alt="" />
          <img src={product?.image} alt="" />
          <img src={product?.image} alt="" />
        </div>
        <div className="product-display-img">
          <img
            className="product-display-main-img"
            src={product?.image}
            alt=""
          />
        </div>
      </div>
      {/* ----------------------------------- */}
      <div className="product-display-right">
        <h2>{product?.name}</h2>
        <div className="product-display-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        {/* ---- */}
        <div className="product-display-right-prices">
          <div className="product-display-right-price-old">
            ${product?.oldPrice}
          </div>
          <div className="product-display-right-price-new">
            ${product?.newPrice}
          </div>
        </div>
        {/* ---- */}
        <div className="product-display-right-description">
          A modern smartphone built for everyday convenience and performance.
          Designed with a sleek look and smooth functionality, it delivers
          reliable features, responsive operation, and a comfortable user
          experience for daily use.
        </div>
        {/* ---- */}
        <div className="product-display-right-color">
          <h2>Select Color</h2>
          <div className="product-display-right-colors">
            <div>B</div>
            <div>W</div>
            <div>S</div>
            <div>G</div>
            <div>O</div>
          </div>
        </div>
        {/* --------------- */}
        <button
          onClick={() => {
            addToCart(product?.id);
          }}
        >
          ADD TO CART
        </button>
      </div>
    </section>
  );
}

export default ProductDisplay;
