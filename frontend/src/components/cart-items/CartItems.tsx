import { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContextProvider";
import remove_icon from "../assets/cart_cross_icon.png";
import type { Product } from "../../types/product";

function CartItems() {
  const { allProducts, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext)!;
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
              <div className="cart-items-format cart-items-format-main">
                <img className="cart-icon-product-icon" src={p.image} alt="" />
                <p>{p.name}</p>
                <p>{p.newPrice}</p>
                <button className="cart-items-quantity">
                  {cartItems[p.id]}
                </button>
                <p>${p.newPrice * cartItems[p.id]}</p>
                <img
                  className="cart-items-remove-icon"
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
        return null;
      })}
      {/* ////////////////////////// */}
      <div className="cart-items-down">
        <div className="cart-items-total">
          <h2>Cart Total:</h2>
          <div>
            <div className="cart-items-total-items">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-items-total-items">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart-items-total-items">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-items-promo-code">
          <p>Enter your promo code here</p>
          <div className="cart-items-promo-box">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartItems;
