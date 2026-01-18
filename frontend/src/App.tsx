import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Footer from "./components/footer/Footer";
import banner_galaxy from "./components/assets/banner_galaxy.png";
import banner_iphone from "./components/assets/banner_iphone.png";
import Repair from "./pages/Repair";
import { useState } from "react";
import PageNotFound from "./components/page-not-found/PageNotFound";

// I added this to not show Login and Signup when logged in
const token = localStorage.getItem("auth-token");

function App() {
  const [sortType, setSortType] = useState<"name" | "priceHigh" | "priceLow">(
    "name",
  );

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Shop is our Homepage */}
          <Route path="/" element={<Shop />} />
          <Route
            path="/iphones"
            element={
              <ShopCategory
                category="iphone"
                banner={banner_iphone}
                sortType={sortType}
                setSortType={setSortType}
              />
            }
          />
          <Route
            path="/galaxies"
            element={
              <ShopCategory
                category="galaxy"
                banner={banner_galaxy}
                sortType={sortType}
                setSortType={setSortType}
              />
            }
          />
          <Route path="/repair" element={<Repair />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/login"
            element={token ? <Navigate to="/" replace /> : <LoginSignup />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
