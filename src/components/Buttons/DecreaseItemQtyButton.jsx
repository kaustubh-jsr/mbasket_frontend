import React from "react";

const DecreaseItemQtyButton = ({ decCartQty, btnLoading }) => {
  return (
    <button
      className="btn btn-primary"
      onClick={decCartQty}
      disabled={btnLoading}
    >
      -
    </button>
  );
};

export default DecreaseItemQtyButton;
