import React, { useState } from "react";
import { useCart } from "../../contexts/cart-context";
import { useAuth } from "../../contexts/auth-context";
import { deleteItemFromCartApi, moveFromCartToWishlistApi } from "../../apis";
import DecreaseItemQtyButton from "../Buttons/DecreaseItemQtyButton";
import IncreaseItemQtyButton from "../Buttons/IncreaseItemQtyButton";
import { useWishlist } from "../../contexts/wishlist-context";
import { decCartQty, incCartQty } from "../../utilities";
function CartProductCard({ item }) {
  const { cartState, cartDispatch, CART_ACTIONS } = useCart();
  const { setWishlist } = useWishlist();
  const auth = useAuth();
  const [btnLoading, setBtnLoading] = useState(false);
  let cartQty = 0;
  for (let cartItem of cartState.cart) {
    if (cartItem.slug === item.slug) {
      cartQty = cartItem.cartQty;
    }
  }
  const removeItemFromCart = () => {
    deleteItemFromCartApi(
      item.slug,
      auth.token,
      cartDispatch,
      CART_ACTIONS,
      setBtnLoading
    );
  };

  const moveFromCartToWishlist = () => {
    moveFromCartToWishlistApi(
      auth.token,
      item.slug,
      setWishlist,
      cartDispatch,
      CART_ACTIONS,
      setBtnLoading
    );
  };
  return (
    <div class="card card--horizontal">
      <div class="card-basic--image card--horizontal-image">
        <img class="card-basic--img-tag" src={item.image} alt={item.name} />
      </div>
      <div class="card--badge">New</div>
      <div class="card--dismiss">
        <button class="btn-close" onClick={removeItemFromCart}></button>
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
            <DecreaseItemQtyButton
              decCartQty={() =>
                decCartQty(
                  auth.token,
                  item.slug,
                  cartDispatch,
                  CART_ACTIONS,
                  setBtnLoading
                )
              }
              btnLoading={btnLoading}
            />
            <span class="qty-in-cart">{cartQty}</span>
            <IncreaseItemQtyButton
              cartQty={cartQty}
              item={item}
              incCartQty={() =>
                incCartQty(
                  auth.token,
                  item.slug,
                  cartDispatch,
                  CART_ACTIONS,
                  setBtnLoading
                )
              }
              btnLoading={btnLoading}
            />
          </div>
          <button
            class="btn btn-outline-secondary"
            onClick={moveFromCartToWishlist}
            disabled={btnLoading}
          >
            Move to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartProductCard;
