import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Footer from "./components/footer/Footer";
import men_banner from "./components/assets/banner_mens.png";
import women_banner from "./components/assets/banner_women.png";
import Repair from "./pages/Repair";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Shop is our Homepage */}
          <Route path="/" element={<Shop />} />
          <Route
            path="/iphones"
            element={<ShopCategory category="iphone" banner={women_banner} />}
          />
          <Route
            path="/galaxies"
            element={<ShopCategory category="galaxy" banner={men_banner} />}
          />
          <Route path="/repair" element={<Repair />} />
          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
