import React from "react";
import PlaceholderProductCardVertical from "../PlaceholderProductCardVertical";
import { ProductCardVertical } from "../ProductCardVertical";

function Products({ items, categorySlug, itemsLoading }) {
  return (
    <div className="category-product-list-container">
      {itemsLoading
        ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <PlaceholderProductCardVertical />
          ))
        : items
            .filter((item) => {
              return item.categorySlug === categorySlug;
            })
            .map((item, index) => (
              <ProductCardVertical item={item} index={index} />
            ))}
    </div>
  );
}
// filtering based on categorySlug is redudndant since all items here are from same category from backend
export default Products;
