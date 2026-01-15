import { useContext } from "react";
import "./css/Product.css";
import { ShopContext } from "../context/ShopContextProvider";
import type { Product } from "../types/product";
import { useParams } from "react-router-dom";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import ProductDisplay from "../components/product-display/ProductDisplay";
import DescriptionBox from "../components/description-box/DescriptionBox";
import RelatedProducts from "../components/related-products/RelatedProducts";

function Product() {
  const { allProducts } = useContext(ShopContext)!;
  const { productId } = useParams();
  const product = allProducts.find((p) => p.id === Number(productId));
  return (
    <div>
      <Breadcrumb product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
}

export default Product;
