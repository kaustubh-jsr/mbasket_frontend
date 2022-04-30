import { useContext, createContext, useEffect } from "react";
import { getCartStateApi } from "../apis";
import { useCartReducer } from "../reducers/cartReducer";
import { useAuth } from "./auth-context";
const CartContext = createContext({
  cart: [],
  cartTotalAmount: 0,
  cartTotalItems: 0,
});

export const CART_ACTIONS = {
  INC_QTY: "increaseItemQty",
  DEC_QTY: "decreaseItemQuantity",
  DEL_ITEM: "deleteItemFromCart",
  SET_CART_FROM_DB: "setCartFromDb",
  RESET_CART: "resetCartState",
};
export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useCartReducer();
  const auth = useAuth();
  useEffect(() => {
    if (auth.token) {
      getCartStateApi(auth.token, cartDispatch, CART_ACTIONS);
    } else {
      cartDispatch({ type: CART_ACTIONS.RESET_CART });
    }
  }, [auth.token, cartDispatch]);
  return (
    <CartContext.Provider value={{ cartState, cartDispatch, CART_ACTIONS }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
