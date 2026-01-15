import "./Breadcrumbs.css";
import type { Product } from "../../types/product";
import arrow_icon from "../assets/breadcrum_arrow.png";

interface BreadcrumbProps {
  product: Product | undefined;
}

// Mount this in our `Product.tsx` page
function Breadcrumb({ product }: BreadcrumbProps) {
  const icon = <img src={arrow_icon} alt="" />;
  return (
    <div className="breadcrumb">
      HOME {icon} SHOP {icon} {product?.category} {icon} {product?.name}
    </div>
  );
}

export default Breadcrumb;
