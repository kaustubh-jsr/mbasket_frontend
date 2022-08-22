import React from "react";

const OrderedItem = ({ item }) => {
  return (
    <div className="card card--horizontal">
      <div className="card-basic--image card--horizontal-image">
        <img className="card-basic--img-tag" src={item.image} alt={item.name} />
      </div>
      <div className="card--badge">{item.badge}</div>
      <div className="card--details card--horizontal-details">
        <header className="card--header">
          <h1 className="card--heading">
            {item.name.length > 25 ? item.name.slice(0, 18) + "..." : item.name}{" "}
          </h1>
          <p className="card--subheading">{item.variant}</p>
          <p className="card--heading">
            {" "}
            ₹ {item.discountedSellingPrice} (Qty : {item.cartQty}){" "}
          </p>
        </header>
      </div>
    </div>
  );
};

export default OrderedItem;
