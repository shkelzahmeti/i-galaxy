import "./Item.css";

interface ItemProps {
  id: number;
  image: string;
  name: string;
  newPrice: number | string;
  oldPrice: number | string;
}
// Random item/card/phone that will be used in other components
function Item({ image, name, newPrice, oldPrice }: ItemProps) {
  return (
    <article className="item">
      <div className="item-image">
        <img src={image} alt="" />
      </div>
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">${newPrice}</div>
        <div className="item-price-old">${oldPrice}</div>
      </div>
    </article>
  );
}

export default Item;
