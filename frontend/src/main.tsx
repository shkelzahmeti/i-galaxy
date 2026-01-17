import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ShopContextProvider from "./context/ShopContextProvider.tsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Providing data to all pages */}
    <ShopContextProvider>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        toastStyle={{ fontSize: "1.6rem" }}
      />
    </ShopContextProvider>
  </StrictMode>,
);
