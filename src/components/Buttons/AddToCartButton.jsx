import React from "react";

const AddToCartButton = ({ incCartQty, btnLoading }) => {
  return (
    <button
      className="btn btn-primary"
      onClick={incCartQty}
      disabled={btnLoading}
    >
      <i className="fas fa-shopping-cart"></i> Add to Cart
    </button>
  );
};

export default AddToCartButton;
