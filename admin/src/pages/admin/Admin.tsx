import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Admin.css";
import AddProduct from "../../components/add-product/AddProduct";
import ListProduct from "../../components/list-product/ListProduct";

function Admin() {
  return (
    <section className="section-admin">
      <Sidebar />
      <Routes>
        <Route path="addproduct" element={<AddProduct />} />
        <Route path="listproduct" element={<ListProduct />} />
      </Routes>
    </section>
  );
}

export default Admin;
