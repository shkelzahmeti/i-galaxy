// Here we'll provide `ShopContext` data to all pages,
// by wrapping later the `App` with `<ShopContextProvider` in `main.tsx`

import { createContext, type ReactNode } from "react";
import allProducts from "../components/assets/allProducts";
import type { Product } from "../types/product";

type ShopContextType = {
  allProducts: Product[];
};

export const ShopContext = createContext<ShopContextType | null>(null);

type ShopContextProviderProps = {
  children: ReactNode;
};

function ShopContextProvider({ children }: ShopContextProviderProps) {
  // Here we'll insert any data or functions that will
  // be provided in the `ShopContextProvider` as a value
  const contextValue: ShopContextType = { allProducts };

  // Here we'll return this context value through
  // the context provider:
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}

export default ShopContextProvider;
