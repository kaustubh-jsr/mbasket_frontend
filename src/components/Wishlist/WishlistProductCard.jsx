import React from "react";
import "./WishlistProductCard.css";
const WishlistProductCard = ({ item }) => {
  return (
    <div className="card card--horizontal wishlist-item-card">
      <div className="card-basic--image card--horizontal-image">
        <img className="card-basic--img-tag" src={item.image} alt={item.name} />
      </div>
      {item.badge && <div className="card--badge">{item.badge}</div>}
      <div className="card--dismiss">
        <button className="btn-close" />
      </div>
      <div className="card--details card--horizontal-details">
        <header className="card--header">
          <h1 className="card--heading">{item.name} </h1>
          <p className="card--subheading">{item.variant}</p>
          <p className="card--heading">
            {" "}
            <span className="strikethrough grey-text">
              ₹ {item.sellingPrice}
            </span>{" "}
            ₹ {item.discountedSellingPrice}{" "}
            <span className="discount-text primary-text">
              (Save {item.discountPercent})
            </span>
          </p>
        </header>
        <div className="card--links">
          <button className="btn btn-primary">
            <i className="fas fa-shopping-cart" /> Move to Cart
          </button>
          <button className="btn btn-outline-secondary">
            Remove from Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistProductCard;
