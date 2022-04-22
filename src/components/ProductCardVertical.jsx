import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/cart-context";
import "./ProductCardVertical.css";

export const ProductCardVertical = ({ item, index }) => {
  const cart = useContext(CartContext);
  const [itemCartQty, setItemCartQty] = useState(0);

  const decCartQty = () => {
    setItemCartQty((prevQty) => prevQty - 1);
    cart.dispatch({ type: cart.cartActions.DECREASE_QTY, item });
  };

  const incCartQty = () => {
    setItemCartQty((prevQty) => prevQty + 1);
    cart.dispatch({ type: cart.cartActions.INCREASE_QTY, item });
  };

  const addtoCart = () => {
    setItemCartQty((prevQty) => prevQty + 1);
    cart.dispatch({ type: cart.cartActions.ADD_TO_CART, item });
  };
  return (
    <div className="card product-card-vertical">
      {!item.isAvailable && (
        <div class="card-overlay">
          <div class="overlay-text">Out of Stock</div>
        </div>
      )}
      <div className="card-basic--image">
        <img
          className="card-basic--img-tag img-responsive"
          src={item.image}
          alt="sample card"
        />
      </div>
      {item.badge && <div class="card--badge">{item.badge}</div>}
      <div className="card--details">
        <header className="card--header">
          <Link
            key={index}
            to={
              "/category/" +
              item.categorySlug +
              "/" +
              item.subcategorySlug +
              "/" +
              item.slug
            }
          >
            <h1 className="card--heading">
              {item.name.length > 20
                ? item.name.slice(0, 24) + "..."
                : item.name}
            </h1>
          </Link>
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
          {itemCartQty !== 0 ? (
            <>
              <button className="btn btn-primary" onClick={decCartQty}>
                -
              </button>
              <h5>{itemCartQty}</h5>
              <button className="btn btn-primary" onClick={incCartQty}>
                +
              </button>
            </>
          ) : (
            <button className="btn btn-primary" onClick={addtoCart}>
              <i className="fas fa-shopping-cart"></i> Add to Cart
            </button>
          )}

          {item.inWishlist ? (
            <button className="btn btn-outline-secondary">
              Go to Wishlist
            </button>
          ) : (
            <button className="btn btn-outline-secondary">
              Add to Wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
