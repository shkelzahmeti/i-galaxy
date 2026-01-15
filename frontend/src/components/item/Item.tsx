import { Link } from "react-router-dom";
import type { Product } from "../../types/product";
import "./Item.css";

type ItemProps = Product;
// type ItemProps = Omit<Product, "id">;

// Random item/card/phone that will be used in other components
function Item({ id, image, name, newPrice, oldPrice }: ItemProps) {
  return (
    <article className="item">
      <div className="item-image">
        {/* Linking image with product */}
        <Link to={`/product/${id}`}>
          <img
            src={image}
            alt=""
            onClick={() =>
              window.scrollTo({
                top: 0,
                left: 0,
                // behavior: "auto",
              })
            }
          />
        </Link>
      </div>
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">${newPrice}</div>
        <div className="item-price-old">${oldPrice}</div>
      </div>
    </article>
  );
}

export default Item;
