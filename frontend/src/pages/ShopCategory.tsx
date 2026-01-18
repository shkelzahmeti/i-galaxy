/// This component will be used for `iphone` and `galaxy` pages

import { useContext, type JSX } from "react";
import "./css/ShopCategory.css";
import { ShopContext } from "../context/ShopContextProvider";
// import dropdown_icon from "../components/assets/dropdown_icon.png";
import Item from "../components/item/Item";
import type { Product } from "../types/product";

interface ShopCategoryProps {
  category: string;
  banner: string;
  sortType: "name" | "priceHigh" | "priceLow";
  setSortType: React.Dispatch<
    React.SetStateAction<"name" | "priceHigh" | "priceLow">
  >;
}

function ShopCategory({
  category,
  banner,
  sortType,
  setSortType,
}: ShopCategoryProps): JSX.Element {
  // Using data from the context
  const { allProducts } = useContext(ShopContext)!;

  const filteredProducts = allProducts.filter(
    (item) => item.category === category,
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortType === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortType === "priceHigh") {
      return b.newPrice - a.newPrice;
    } else {
      return a.newPrice - b.newPrice;
    }
  });

  return (
    <section className="section-shopcategory">
      <img className="shopcategory-banner" src={banner} alt="" />
      <div className="shopcategory-index-sort">
        <p>
          <span>Showing 1-12</span> out of {allProducts.length} products
        </p>
        <div className="shopcategory-sort">
          <label className="shopcategory-sort-label">
            Sort by:
            <select
              className="shopcategory-sort-select"
              value={sortType}
              onChange={(e) => setSortType(e.target.value as typeof sortType)}
            >
              <option value="name">Name</option>
              <option value="priceHigh">Price: High to Low</option>
              <option value="priceLow">Price: Low to High</option>
            </select>
          </label>
        </div>
      </div>
      {/* ////// */}
      <div className="shopcategory-products">
        {sortedProducts.map((item: Product, i: number) => {
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
