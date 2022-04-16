import React from "react";
import { ProductCardVertical } from "../ProductCardVertical";
import "./FeaturedCategory.css";

export const FeaturedCategory = ({ homeCatHeader, items }) => {
  return (
    <div className="homepage-category-display">
      <div className="category-header h2">{homeCatHeader}</div>
      <div className="category-cards">
        {items.map((item, index) => {
          return <ProductCardVertical item={item} index={index} />;
        })}
      </div>
    </div>
  );
};
