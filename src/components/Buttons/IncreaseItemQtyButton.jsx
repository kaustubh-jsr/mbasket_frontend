import React from "react";
import { toast } from "react-toastify";
const IncreaseItemQtyButton = ({ cartQty, item, incCartQty, btnLoading }) => {
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        if (cartQty < item.maxQuantityAllowed) {
          incCartQty();
        } else {
          toast.error(
            `You cannot have more than ${item.maxQuantityAllowed} of ${item.name} in you cart.`,
            {
              theme: "dark",
              position: "bottom-center",
              autoClose: 5000,
              type: "info",
              hideProgressBar: true,
              toastId: item.name,
            }
          );
        }
      }}
      disabled={btnLoading}
    >
      +
    </button>
  );
};

export default IncreaseItemQtyButton;
