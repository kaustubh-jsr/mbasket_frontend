import { Link } from "react-router-dom";
import { useCart } from "../contexts/cart-context";
import { toast } from "react-toastify";
import "./ProductCardVertical.css";
import { useAuth } from "../contexts/auth-context";
import { addItemToCartApi, decreaseItemFromCartApi } from "../apis";
import { useState } from "react";
import DecreaseItemQtyButton from "./Buttons/DecreaseItemQtyButton";
import IncreaseItemQtyButton from "./Buttons/IncreaseItemQtyButton";
import AddToCartButton from "./Buttons/AddToCartButton";

export const ProductCardVertical = ({ item, index }) => {
  const auth = useAuth();
  const { cartState, cartDispatch, CART_ACTIONS } = useCart();
  const [btnLoading, setBtnLoading] = useState(false);

  let cartQty = 0;
  for (let cartItem of cartState.cart) {
    if (cartItem.slug === item.slug) {
      cartQty = cartItem.cartQty;
    }
  }

  const itemCartAddLoginToast = (item) => {
    toast.info(`Please login to add items to your cart`, {
      theme: "dark",
      hideProgressBar: true,
      position: "bottom-center",
      toastId: "itemCartAddLoginToast",
    });
  };
  const itemWishlistLoginToast = (item) => {
    toast.info(`Please login to add items to your wishlist`, {
      theme: "dark",
      hideProgressBar: true,
      position: "bottom-center",
      toastId: "itemWishlistLoginToast",
    });
  };

  const decCartQty = () => {
    if (auth.token) {
      decreaseItemFromCartApi(
        item.slug,
        auth.token,
        cartDispatch,
        CART_ACTIONS,
        setBtnLoading
      );
    }
  };

  const incCartQty = () => {
    auth.token
      ? addItemToCartApi(
          item.slug,
          auth.token,
          cartDispatch,
          CART_ACTIONS,
          setBtnLoading
        )
      : itemCartAddLoginToast(item);
  };

  const addToWishlist = () => {
    auth.token ? (() => {})() : itemWishlistLoginToast(item);
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
          {cartQty !== 0 ? (
            <>
              <DecreaseItemQtyButton
                decCartQty={decCartQty}
                btnLoading={btnLoading}
              />
              <h5>{cartQty}</h5>
              <IncreaseItemQtyButton
                cartQty={cartQty}
                item={item}
                incCartQty={incCartQty}
                btnLoading={btnLoading}
              />
            </>
          ) : (
            <AddToCartButton incCartQty={incCartQty} btnLoading={btnLoading} />
          )}

          {item.inWishlist ? (
            <button className="btn btn-outline-secondary" disabled={btnLoading}>
              Go to Wishlist
            </button>
          ) : (
            <button
              className="btn btn-outline-secondary"
              onClick={addToWishlist}
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
