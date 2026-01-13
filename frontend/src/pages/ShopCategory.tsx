import type { JSX } from "react";

interface ShopCategoryProps {
  category?: string;
}

function ShopCategory({ category }: ShopCategoryProps): JSX.Element {
  return (
    <div>
      <h1>Shop Category</h1>
      {category && <p>Category: {category}</p>}
      {!category && <p>No category selected</p>}
    </div>
  );
}

export default ShopCategory;
