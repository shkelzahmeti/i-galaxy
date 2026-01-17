import "./Popular.css";
// import dataProducts from "../assets/dataProducts";
import Item from "../item/Item";
import { useEffect, useState } from "react";
import { Product } from "../../types/product";

function Popular() {
  const [popularPhones, setPopularPhones] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/popular")
      .then((res) => res.json())
      .then((data) => setPopularPhones(data));
  }, []);

  return (
    <section className="section-popular">
      <h2>Fan Favorites</h2>
      <hr />
      <div className="popular-item">
        {popularPhones.map((item, i) => {
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
    </section>
  );
}

export default Popular;
