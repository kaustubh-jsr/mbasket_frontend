import { createContext, useReducer } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const cartActions = {
    ADD_TO_CART: "addToCart",
    INCREASE_QTY: "incQty",
    DECREASE_QTY: "decQty",
    DELETE_FROM_CART: "delFromCart",
  };

  const cartReducer = (state, action) => {
    switch (action.type) {
      case cartActions.ADD_TO_CART:
        let newItems1 = [...state.cartItems, action.item];
        let newTotal1 = state.total + action.item.discountedSellingPrice;
        let newQuantity1 = state.quantity + 1;
        return {
          ...state,
          cartItems: newItems1,
          total: newTotal1,
          quantity: newQuantity1,
        };
      case cartActions.INCREASE_QTY:
        let newItems2 = state.cartItems.map((item) => {
          if (item.slug === action.item.slug) {
            item.quantity += 1;
          }
          return item;
        });
        let newTotal2 = state.total + action.item.discountedSellingPrice;
        let newQuantity2 = state.quantity + 1;
        return {
          ...state,
          cartItems: newItems2,
          total: newTotal2,
          quantity: newQuantity2,
        };
      case cartActions.DELETE_FROM_CART:
        let newItems3 = state.cartItems.filter(
          (item) => item.slug !== action.item.slug
        );
        return {
          ...state,
          cartItems: newItems3,
          total:
            state.total -
            action.item.cartQuantity * action.item.discountedSellingPrice,
          quantity: state.quantity - action.item.cartQuantity,
        };

      case cartActions.DECREASE_QTY:
        let newItems4 = state.cartItems.map((item) => {
          if (item.slug === action.item.slug) {
            item.quantity -= 1;
          }
          return item;
        });
        let newTotal4 = state.total - action.item.discountedSellingPrice;
        let newQuantity4 = state.quantity - 1;
        return {
          ...state,
          cartItems: newItems4,
          total: newTotal4,
          quantity: newQuantity4,
        };
      default:
        return { ...state };
    }
  };

  const [state, dispatch] = useReducer(cartReducer, {
    cartItems: [],
    total: 0,
    quantity: 0,
  });

  return (
    <CartContext.Provider value={{ state, dispatch, cartActions }}>
      {children}
    </CartContext.Provider>
  );
};
