import { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContextProvider";
import remove_icon from "../assets/cart_cross_icon.png";
import type { Product } from "../../types/product";

function CartItems() {
  const { allProducts, cartItems, removeFromCart } = useContext(ShopContext)!;
  return (
    <section className="section-cart-items">
      <div className="cart-items-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {allProducts.map((p: Product) => {
        // this means that this product has quantity
        if (cartItems[p.id] > 0) {
          return (
            <div key={p.id}>
              <div className="cart-items-format">
                <img className="cart-icon-product-icon" src={p.image} alt="" />
                <p>{p.name}</p>
                <p>{p.newPrice}</p>
                <button className="cart-items-quantity">
                  {cartItems[p.id]}
                </button>
                <p>{p.newPrice * cartItems[p.id]}</p>
                <img
                  src={remove_icon}
                  alt=""
                  onClick={() => {
                    removeFromCart(p.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
      })}
    </section>
  );
}

export default CartItems;
