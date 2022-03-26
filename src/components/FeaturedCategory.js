import React from "react";
import { Link } from "react-router-dom";
import "./FeaturedCategory.css";

export const FeaturedCategory = ({ homeCatHeader, items }) => {
  return (
    <div className="homepage-category-display">
      <div className="category-header h2">{homeCatHeader}</div>
      <div className="category-cards">
        {items.map((item) => {
          return (
            <Link
              to={
                "/" +
                item.categorySlug +
                "/" +
                item.subcategorySlug +
                "/" +
                item.slug
              }
              className="card product-card-vertical"
            >
              <div className="card-basic--image">
                <img
                  className="card-basic--img-tag img-responsive"
                  src={item.image}
                  alt="sample card"
                />
              </div>
              <div className="card--details">
                <header className="card--header">
                  <h1 className="card--heading">{item.name}</h1>
                  <p className="card--subheading">{item.variant}</p>
                  <p className="card--heading">
                    {" "}
                    <span className="strikethrough grey-text">
                      ₹{item.sellingPrice}
                    </span>{" "}
                    ₹{item.discountedSellingPrice}{" "}
                    <span className="discount-text primary-text">
                      (Save {item.discountPercent}%)
                    </span>
                  </p>
                </header>

                <div className="card--links">
                  {item.cartQuantity !== 0 ? (
                    <>
                      <button className="btn btn-primary">-</button>
                      <h5>{item.cartQuantity}</h5>
                      <button className="btn btn-primary">+</button>
                    </>
                  ) : (
                    <button className="btn btn-primary">
                      <i className="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                  )}

                  <button className="btn btn-outline-secondary">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
