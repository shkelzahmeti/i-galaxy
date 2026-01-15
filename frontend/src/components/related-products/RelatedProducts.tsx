import "./RelatedProducts.css";
import dataProducts from "../assets/dataProducts";
import Item from "../item/Item";

function RelatedProducts() {
  return (
    <div className="related-products">
      <h2>Related Products</h2>
      <hr />
      <div className="related-products-item">
        {dataProducts.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              image={item.image}
              name={item.name}
              category={item.category}
              newPrice={item.newPrice}
              oldPrice={item.oldPrice}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RelatedProducts;
