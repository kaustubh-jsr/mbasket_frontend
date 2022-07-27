import React from "react";
import CommonFeatureSection from "./CommonFeatureSection";

const ProductDescription = ({ item }) => {
  return (
    <div className="product-description-container">
      <div className="product-description h5">
        <h5>Description</h5>
        <div className="item-description">{item.description}</div>
      </div>
      <CommonFeatureSection />
    </div>
  );
};

export default ProductDescription;
