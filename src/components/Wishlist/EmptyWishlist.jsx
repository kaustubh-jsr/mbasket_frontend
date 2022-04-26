import React from "react";
import { Link } from "react-router-dom";
import "./EmptyWishlist.css";
const EmptyWishlist = () => {
  return (
    <div className="empty-wishlist">
      <h2>
        Your Mantra genie is waiting, go ahead and make some{" "}
        <Link to="/" style={{ color: "green" }}>
          wishes
        </Link>
      </h2>
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-3428238-2902697.png"
        alt="Empty Wishlist"
        className="img-responsive empty-wishlist-img"
      />
    </div>
  );
};

export default EmptyWishlist;
