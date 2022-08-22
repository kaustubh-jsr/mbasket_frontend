import React from "react";
import { useNavigate } from "react-router-dom";

const OrderInfoCard = ({ cart }) => {
  const navigate = useNavigate();
  return (
    <div className="order-info-sidebar card">
      <div className="satisfaction-grt grid-30-70">
        <img
          src="https://res.cloudinary.com/kaustubh-apps/image/upload/v1660899375/ribbon_nilqjk.webp"
          alt="ribbon"
        />
        <div className="grt-msg">
          <h6 className="grt-msg-header">100 % satisfaction guarantee</h6>
          <h6 className="grt-msg-text">Place your order with peace of mind.</h6>
        </div>
      </div>
      <div className="sidenav-section__div">
        <hr className="sidenav-section__divider" />
      </div>
      <h5>
        Subtotal{" "}
        <span className="h6">({cart.cartState.cartTotalItems} items)</span>: Rs.{" "}
        {cart.cartState.cartTotalAmount}
      </h5>
      <div className="sidenav-section__div">
        <hr className="sidenav-section__divider" />
      </div>
      <button onClick={() => navigate("/checkout")} className="btn btn-success">
        Proceed to buy
      </button>
    </div>
  );
};

export default OrderInfoCard;
