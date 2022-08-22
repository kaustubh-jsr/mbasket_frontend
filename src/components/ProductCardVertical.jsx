import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/cart-context";
import "./ProductCardVertical.css";
import { useAuth } from "../contexts/auth-context";
import { useState } from "react";
import { useWishlist } from "../contexts/wishlist-context";
import {
  AddToCartButton,
  DecreaseItemQtyButton,
  IncreaseItemQtyButton,
} from "./Buttons";
import { addToWishlist, decCartQty, incCartQty } from "../utilities";

export const ProductCardVertical = ({ item, index }) => {
  const auth = useAuth();
  const { cartState, cartDispatch, CART_ACTIONS } = useCart();
  const { wishlist, setWishlist } = useWishlist();
  const [btnLoading, setBtnLoading] = useState(false);
  const navigate = useNavigate();
  let cartQty = 0;
  for (let cartItem of cartState.cart) {
    if (cartItem.slug === item.slug) {
      cartQty = cartItem.cartQty;
    }
  }
  let inWishlist = false;
  for (let wishlistItem of wishlist) {
    if (wishlistItem.slug === item.slug) {
      inWishlist = true;
    }
  }

  return (
    <div className="card product-card-vertical">
      {!item.isAvailable && (
        <div className="card-overlay">
          <div className="overlay-text">Out of Stock</div>
        </div>
      )}
      <div className="card-basic--image">
        <img
          className="card-basic--img-tag img-responsive"
          src={item.image}
          alt="sample card"
        />
      </div>
      {item.badge && <div className="card--badge">{item.badge}</div>}
      <div className="card--details">
        <header className="card--header">
          <Link key={index} to={"/product/" + item.slug}>
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
          {cartQty !== 0 ? (
            <>
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
              <h5>{cartQty}</h5>
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
            </>
          ) : (
            <AddToCartButton
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
          )}

          {inWishlist ? (
            <button
              className="btn btn-outline-secondary"
              onClick={() => navigate("/wishlist")}
              disabled={btnLoading}
            >
              Go to Wishlist
            </button>
          ) : (
            <button
              className="btn btn-outline-secondary"
              onClick={() =>
                addToWishlist(auth.token, item.slug, setWishlist, setBtnLoading)
              }
              disabled={btnLoading}
            >
              Add to Wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
