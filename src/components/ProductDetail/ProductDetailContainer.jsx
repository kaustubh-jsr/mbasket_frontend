import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import { useAuth } from "../../contexts/auth-context";
import { useCart } from "../../contexts/cart-context";
import { useWishlist } from "../../contexts/wishlist-context";
import { addToWishlist, decCartQty, incCartQty } from "../../utilities";
import {
  AddToCartButton,
  DecreaseItemQtyButton,
  IncreaseItemQtyButton,
} from "../Buttons";

const ProductDetailContainer = ({ item }) => {
  const { cartState, cartDispatch, CART_ACTIONS } = useCart();
  const auth = useAuth();
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
    <div className="product-detail-container">
      <div className="product-img-section">
        <div className="product-img">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: item.name,
                isFluidWidth: true,
                src: item.image,
                imageClassName: "product-detail-img img-responsive",
              },
              largeImage: {
                src: item.image,
                width: 1000,
                height: 1000,
              },
            }}
          />
        </div>
      </div>
      <div className="product-details">
        <div className="h3 product-name">{item.name}</div>
        <div className="h5 product-variant">{item.variant}</div>
        <div className="product-pricing">
          <span className="discounted-price h5">
            ₹ {item.discountedSellingPrice}
          </span>
          <span className="selling-price h6">₹ {item.sellingPrice}</span>
          <span className="chip h6">{item.discountPercent}% off</span>
        </div>
        <div className="product-btns">
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

export default ProductDetailContainer;
