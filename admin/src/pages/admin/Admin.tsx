import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Admin.css";
import AddProduct from "../../components/add-product/AddProduct";
import ListProduct from "../../components/list-product/ListProduct";
import PageNotFound from "../../components/page-not-found/PageNotFound";

function Admin() {
  return (
    <section className="section-admin">
      <Sidebar />
      <Routes>
        <Route path="/" element={<> </>} />
        <Route path="addproduct" element={<AddProduct />} />
        <Route path="listproduct" element={<ListProduct />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </section>
  );
}

export default Admin;
