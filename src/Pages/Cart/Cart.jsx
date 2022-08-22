import React from "react";
import "./Cart.css";
import CartProductCard from "../../components/Cart/CartProductCard";
import { useCart } from "../../contexts/cart-context";
import EmptyCartSvg from "../../components/Cart/EmptyCartSvg";
import OrderInfoCard from "../../components/Cart/OrderInfoCard";

function Cart() {
  const cart = useCart();
  return (
    <div className="cart-page">
      <div className="h2 cart-heading">
        Shopping Cart{" "}
        {cart.cartState.cartTotalItems
          ? `(${cart.cartState.cartTotalItems})`
          : ""}
      </div>
      <div className="sidenav-section__div">
        <hr className="sidenav-section__divider" />
      </div>
      {cart.cartState.cartTotalItems === 0 ? (
        <>
          <h3 className="text-center">Your cart is empty.</h3>
          <EmptyCartSvg />
        </>
      ) : (
        <div className="cart-page-container grid-70-30">
          <div className="cart-items">
            {cart.cartState.cart.map((item) => (
              <CartProductCard key={item.slug} item={item} />
            ))}
          </div>
          <OrderInfoCard cart={cart} />
        </div>
      )}
    </div>
  );
}

export default Cart;
