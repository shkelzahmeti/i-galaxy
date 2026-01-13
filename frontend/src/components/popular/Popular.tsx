import "./Popular.css";
import dataProducts from "../assets/dataProducts";
import Item from "../item/Item";

function Popular() {
  return (
    <section className="section-popular">
      <h2>Fan Favorites</h2>
      <hr />
      <div className="popular-item">
        {dataProducts.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              image={item.image}
              name={item.name}
              newPrice={item.newPrice}
              oldPrice={item.oldPrice}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Popular;
