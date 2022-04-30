import React from "react";
import CommonFeatureSection from "./CommonFeatureSection";

const ProductDescription = ({ item }) => {
  return (
    <div class="product-description-container">
      <div class="product-description h5">
        <h5>Description</h5>
        <div>{item.description}</div>
      </div>
      <CommonFeatureSection />
    </div>
  );
};

export default ProductDescription;
