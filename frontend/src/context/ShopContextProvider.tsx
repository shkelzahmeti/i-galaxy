// Here we'll provide `ShopContext` data to all pages,
// by wrapping later the `App` with `<ShopContextProvider` in `main.tsx`

import { createContext, useEffect, useState, type ReactNode } from "react";
// import allProducts from "../components/assets/allProducts";
import type { Product } from "../types/product";

type ShopContextType = {
  allProducts: Product[];
  cartItems: {
    [key: number]: number;
  };
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  getTotalCartAmount: () => number;
  getTotalCartItems: () => number;
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
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  return cart;
};

function ShopContextProvider({ children }: ShopContextProviderProps) {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<Cart>(getDefaultCart());
  console.log(cartItems);

  // Added last:
  useEffect(() => {
    fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  }, []);

  const addToCart = (itemId: number): void => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    // We'll use these quantities to create our `Cart` page
    console.log(cartItems);
  };
  const removeFromCart = (itemId: number): void => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    console.log(cartItems);
  };

  const getTotalCartAmount = () =>
    Object.entries(cartItems).reduce((total, [id, quantity]) => {
      const product = allProducts.find((p) => p.id === Number(id));
      return product ? total + product.newPrice * quantity : total;
    }, 0);

  const getTotalCartItems = () =>
    Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);

  // Here I exported values to consume (in `Product` and `ProductDisplay`)
  const contextValue: ShopContextType = {
    allProducts,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}

export default ShopContextProvider;
