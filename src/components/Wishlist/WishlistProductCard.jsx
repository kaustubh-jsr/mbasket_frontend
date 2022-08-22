import React, { useState } from "react";
import { moveFromWishlistToCartApi, removeFromWishlistApi } from "../../apis";
import { useAuth } from "../../contexts/auth-context";
import { useCart } from "../../contexts/cart-context";
import { useWishlist } from "../../contexts/wishlist-context";
import "./WishlistProductCard.css";
const WishlistProductCard = ({ item }) => {
  const auth = useAuth();
  const { setWishlist } = useWishlist();
  const [btnLoading, setBtnLoading] = useState(false);
  const { cartState, cartDispatch, CART_ACTIONS } = useCart();

  const removeFromWishlist = () => {
    removeFromWishlistApi(auth.token, item.slug, setWishlist, setBtnLoading);
  };

  const moveFromWishlistToCart = () => {
    let itemInCart = false;
    let itemMaxInCart = false;
    for (let cartItem of cartState.cart) {
      if (cartItem.slug === item.slug) {
        itemInCart = true;
        console.log(
          `Item qty in cart is ${cartItem.cartQty}, and max qty allowed is ${item.maxQuantityAllowed}`
        );
        if (cartItem.cartQty === item.maxQuantityAllowed) {
          itemMaxInCart = true;
        }
      }
    }
    moveFromWishlistToCartApi(
      auth.token,
      item.slug,
      itemInCart,
      itemMaxInCart,
      setWishlist,
      cartDispatch,
      CART_ACTIONS,
      setBtnLoading
    );
  };

  return (
    <div className="card card--horizontal wishlist-item-card">
      <div className="card-basic--image card--horizontal-image">
        <img className="card-basic--img-tag" src={item.image} alt={item.name} />
      </div>
      {item.badge && <div className="card--badge">{item.badge}</div>}
      <div className="card--dismiss">
        <button
          className="btn-close"
          onClick={removeFromWishlist}
          disabled={btnLoading}
        />
      </div>
      <div className="card--details card--horizontal-details">
        <header className="card--header">
          <h1 className="card--heading">
            {item.name.length > 25 ? item.name.slice(0, 18) + "..." : item.name}{" "}
          </h1>
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
          <button
            className="btn btn-primary"
            onClick={moveFromWishlistToCart}
            disabled={btnLoading}
          >
            <i className="fas fa-shopping-cart" /> Move to Cart
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={removeFromWishlist}
            disabled={btnLoading}
          >
            Remove from Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistProductCard;
