import { toast } from "react-toastify";
import {
  addItemToCartApi,
  addToWishlistApi,
  decreaseItemFromCartApi,
} from "../apis";

const itemCartAddLoginToast = () => {
  toast.info(`Please login to add items to your cart`, {
    theme: "dark",
    hideProgressBar: true,
    position: "bottom-center",
    toastId: "itemCartAddLoginToast",
  });
};
const itemWishlistLoginToast = () => {
  toast.info(`Please login to add items to your wishlist`, {
    theme: "dark",
    hideProgressBar: true,
    position: "bottom-center",
    toastId: "itemWishlistLoginToast",
  });
};

export const decCartQty = (
  token,
  itemSlug,
  cartDispatch,
  CART_ACTIONS,
  setBtnLoading
) => {
  if (token) {
    decreaseItemFromCartApi(
      itemSlug,
      token,
      cartDispatch,
      CART_ACTIONS,
      setBtnLoading
    );
  }
};

export const incCartQty = (
  token,
  itemSlug,
  cartDispatch,
  CART_ACTIONS,
  setBtnLoading
) => {
  token
    ? addItemToCartApi(
        itemSlug,
        token,
        cartDispatch,
        CART_ACTIONS,
        setBtnLoading
      )
    : itemCartAddLoginToast();
};

export const addToWishlist = (token, itemSlug, setWishlist, setBtnLoading) => {
  token
    ? addToWishlistApi(token, itemSlug, setWishlist, setBtnLoading)
    : itemWishlistLoginToast();
};
