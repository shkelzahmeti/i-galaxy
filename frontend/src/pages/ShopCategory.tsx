/// This component will be used for `iphone` and `galaxy` pages

import { useContext, type JSX } from "react";
import "./css/ShopCategory.css";
import { ShopContext } from "../context/ShopContextProvider";
import dropdown_icon from "../components/assets/dropdown_icon.png";
import Item from "../components/item/Item";
import type { Product } from "../types/product";

interface ShopCategoryProps {
  category: string;
  banner: string;
}

function ShopCategory({ category, banner }: ShopCategoryProps): JSX.Element {
  // Using data from the context
  const { allProducts } = useContext(ShopContext)!;
  return (
    <section className="section-shopcategory">
      <img className="shopcategory-banner" src={banner} alt="" />
      <div className="shopcategory-index-sort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      {/* ////// */}
      <div className="shopcategory-products">
        {allProducts.map((item: Product, i: number) => {
          if (category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                category={item.category}
                image={item.image}
                name={item.name}
                newPrice={item.newPrice}
                oldPrice={item.oldPrice}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore more</div>
    </section>
  );
}

export default ShopCategory;
