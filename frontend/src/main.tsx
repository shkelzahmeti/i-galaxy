import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ShopContextProvider from "./context/ShopContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Providing data to all pages */}
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </StrictMode>
);
