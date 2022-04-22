import React from "react";
import { ProductCardVertical } from "../ProductCardVertical";

function Products({ items, categorySlug }) {
  return (
    <div className="category-product-list-container">
      {items
        .filter((item) => {
          return item.categorySlug === categorySlug;
        })
        .map((item, index) => (
          <ProductCardVertical item={item} index={index} />
        ))}
    </div>
  );
}

export default Products;
