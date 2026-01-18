// Here we'll provide `ShopContext` data to all pages,
// by wrapping later the `App` with `<ShopContextProvider` in `main.tsx`

import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Product } from "../types/product";

type ShopContextType = {
  allProducts: Product[];
  cartItems: { [key: number]: number };
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  getTotalCartAmount: () => number;
  getTotalCartItems: () => number;
};

export const ShopContext = createContext<ShopContextType | null>(null);

type ShopContextProviderProps = {
  children: ReactNode;
};

interface Cart {
  [key: number]: number;
}

const getDefaultCart = (): Cart => {
  const storedCart = localStorage.getItem("cartItems");
  if (storedCart) return JSON.parse(storedCart);

  const cart: Cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  return cart;
};

function ShopContextProvider({ children }: ShopContextProviderProps) {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<Cart>(getDefaultCart());

  useEffect(() => {
    fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId: number): void => {
    setCartItems((prev) => {
      const updated = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
      console.log("Added to cart:", updated);
      return updated;
    });
  };

  const removeFromCart = (itemId: number): void => {
    setCartItems((prev) => {
      const updated = {
        ...prev,
        [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
      };
      console.log("Removed from cart:", updated);
      return updated;
    });
  };

  const getTotalCartAmount = (): number =>
    Object.entries(cartItems).reduce((total, [id, quantity]) => {
      const product = allProducts.find((p) => p.id === Number(id));
      return product ? total + product.newPrice * quantity : total;
    }, 0);

  const getTotalCartItems = (): number =>
    Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);

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
