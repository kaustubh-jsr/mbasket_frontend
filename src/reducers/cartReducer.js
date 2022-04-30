import { useReducer } from "react";
import { CART_ACTIONS } from "../contexts/cart-context";

export const useCartReducer = () => {
  const cartIntialState = { cart: [], cartTotalAmount: 0, cartTotalItems: 0 };

  const cartReducer = (cartState, cartAction) => {
    let newCart;
    let newCartTotalAmount;
    let newCartTotalItems;
    let newCartQty;
    switch (cartAction.type) {
      case CART_ACTIONS.INC_QTY:
        let itemInCart = false;
        newCartQty = 0;
        newCartTotalAmount = cartState.cartTotalAmount;
        newCartTotalItems = cartState.cartTotalItems;
        newCart = cartState.cart.map((item) => {
          if (item.slug === cartAction.item.slug) {
            itemInCart = true;
            if (item.cartQty < item.maxQuantityAllowed) {
              newCartQty = item.cartQty + 1;
              newCartTotalAmount += cartAction.item.discountedSellingPrice;
              newCartTotalItems += 1;
              return { ...item, cartQty: newCartQty };
            } else {
              return { ...item };
            }
          }
          return { ...item };
        });
        if (!itemInCart) {
          newCart.push({ ...cartAction.item, cartQty: 1 });
          newCartTotalAmount =
            cartState.cartTotalAmount + cartAction.item.discountedSellingPrice;
          newCartTotalItems = cartState.cartTotalItems + 1;
        }
        return {
          ...cartState,
          cart: newCart,
          cartTotalAmount: newCartTotalAmount,
          cartTotalItems: newCartTotalItems,
        };

      case CART_ACTIONS.DEC_QTY:
        let itemDeleted = false;
        // first O(1) loop through to check if the item to decrease qty has qty = 1
        // this filters the item out and sets the itemDeleted to true, preventing later loop from running
        // for items not matching this double condition of qty=1 and item=action.item, they remain as is
        newCart = cartState.cart.filter((item) => {
          if (item.slug === cartAction.item.slug && item.cartQty === 1) {
            itemDeleted = true;
            newCartTotalItems = cartState.cartTotalItems - 1;
            newCartTotalAmount =
              cartState.cartTotalAmount -
              cartAction.item.discountedSellingPrice;
            return false;
          }
          return true;
        });
        // If the first loop does delete any item this loop does not run
        // if the first one doesn't delete, this loop finds the item with action.item.slug, and decreases its qty by 1
        if (!itemDeleted) {
          newCart = cartState.cart.map((item) => {
            if (item.slug === cartAction.item.slug) {
              newCartTotalItems = cartState.cartTotalItems - 1;
              newCartTotalAmount =
                cartState.cartTotalAmount -
                cartAction.item.discountedSellingPrice;
              return { ...item, cartQty: item.cartQty - 1 };
            }
            return { ...item };
          });
        }

        return {
          ...cartState,
          cart: newCart,
          cartTotalAmount: newCartTotalAmount,
          cartTotalItems: newCartTotalItems,
        };

      case CART_ACTIONS.DEL_ITEM:
        newCart = cartState.cart.filter((item) => {
          if (item.slug === cartAction.item.slug) {
            newCartTotalItems = cartState.cartTotalItems - item.cartQty;
            newCartTotalAmount =
              cartState.cartTotalAmount -
              item.cartQty * item.discountedSellingPrice;
            return false;
          }
          return true;
        });
        return {
          ...cartState,
          cart: newCart,
          cartTotalAmount: newCartTotalAmount,
          cartTotalItems: newCartTotalItems,
        };
      case CART_ACTIONS.SET_CART_FROM_DB:
        return { ...cartAction.payload };
      case CART_ACTIONS.RESET_CART:
        return { ...cartIntialState };
      default:
        return cartState;
    }
  };

  const [cartState, cartDispatch] = useReducer(cartReducer, cartIntialState);

  return [cartState, cartDispatch];
};
