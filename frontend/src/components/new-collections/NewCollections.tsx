import "./NewCollections.css";
import newCollections from "../assets/newCollections";
import Item from "../item/Item";

function NewCollections() {
  return (
    <section className="section-new-collections">
      <h2>NEW COLLECTIONS</h2>
      <hr />
      <div className="collections">
        {newCollections.map((item, i) => {
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

export default NewCollections;
