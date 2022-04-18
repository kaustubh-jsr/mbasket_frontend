import React from "react";

function CartProductCard({ item, state, dispatch }) {
  return (
    <div class="card card--horizontal">
      <div class="card-basic--image card--horizontal-image">
        <img class="card-basic--img-tag" src={item.image} alt="sample card" />
      </div>
      <div class="card--badge">New</div>
      <div class="card--dismiss">
        <button class="btn-close"></button>
      </div>
      <div class="card--details card--horizontal-details">
        <header class="card--header">
          <h1 class="card--heading">
            {item.name.length > 25 ? item.name.slice(0, 18) + "..." : item.name}{" "}
          </h1>
          <p class="card--subheading">{item.variant}</p>
          <p class="card--heading">
            {" "}
            <span class="strikethrough grey-text">
              ₹ {item.sellingPrice}
            </span> ₹ {item.discountedSellingPrice}{" "}
            <span class="discount-text primary-text">{`(Save ${item.discountPercent}%)`}</span>
          </p>
        </header>

        <div class="card--links">
          <div class="item-counter">
            <button
              class="btn btn-primary"
              onClick={() => dispatch({ type: "decQty", item: item })}
            >
              {" "}
              -{" "}
            </button>
            <span class="qty-in-cart">{item.cartQuantity}</span>
            <button
              class="btn btn-primary"
              onClick={() => dispatch({ type: "incQty", item: item })}
            >
              {" "}
              +{" "}
            </button>
          </div>
          <button class="btn btn-outline-secondary">Move to Wishlist</button>
        </div>
      </div>
    </div>
  );
}

export default CartProductCard;
