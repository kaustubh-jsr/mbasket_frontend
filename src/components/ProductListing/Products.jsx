import React from "react";
import { ProductCardVertical } from "../ProductCardVertical";

function Products({ items, searchParams, categorySlug }) {
  return (
    <div className="category-product-list-container">
      {items
        .filter((item) => {
          if (item.categorySlug === categorySlug) {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            return item.subcategorySlug === filter;
          }
          return false;
        })
        .map((item, index) => (
          <ProductCardVertical item={item} index={index} />
        ))}
    </div>
  );
}

export default Products;
