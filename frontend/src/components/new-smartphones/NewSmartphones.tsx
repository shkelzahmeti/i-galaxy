import "./NewSmartphones.css";
// import newSmartphones from "../assets/newSmartphones";
import Item from "../item/Item";
import Product from "../../pages/Product";
import { useEffect, useState } from "react";

function NewSmartphones() {
  const [newSmartphones, setNewSmartphones] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/newsmartphones")
      .then((res) => res.json())
      .then((data) => setNewSmartphones(data));
  }, []);

  return (
    <section className="section-new-smartphones">
      <h2>NEW SMARTPHONES</h2>
      <hr />
      <div className="smartphones">
        {newSmartphones.map((item: Product, i: number) => {
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

export default NewSmartphones;
