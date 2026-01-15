// Here we'll provide `ShopContext` data to all pages,
// by wrapping later the `App` with `<ShopContextProvider` in `main.tsx`

import { createContext, useState, type ReactNode } from "react";
import allProducts from "../components/assets/allProducts";
import type { Product } from "../types/product";

type ShopContextType = {
  allProducts: Product[];
  cartItems: {
    [key: number]: number;
  };
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
};

export const ShopContext = createContext<ShopContextType | null>(null);

type ShopContextProviderProps = {
  children: ReactNode;
};

// ADDED LATER (for add to cart):
interface Cart {
  [key: number]: number;
}
const getDefaultCart = () => {
  const cart: Cart = {};
  for (let i = 0; i < allProducts.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

function ShopContextProvider({ children }: ShopContextProviderProps) {
  const [cartItems, setCartItems] = useState<Cart>(getDefaultCart());
  console.log(cartItems); // key is representing our product id, and the value will represent the number of items added for that product id

  const addToCart = (itemId: number): void => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
    // We'll use these quantities to create our `Cart` page
  };
  const removeFromCart = (itemId: number): void => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    console.log(cartItems);
  };

  // Here I exported values to consume (in `Product` and `ProductDisplay`)
  const contextValue: ShopContextType = {
    allProducts,
    cartItems,
    addToCart,
    removeFromCart,
  };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}

export default ShopContextProvider;
