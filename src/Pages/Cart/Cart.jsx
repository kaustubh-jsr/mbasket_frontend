import React from "react";
import "./Cart.css";
import CartProductCard from "../../components/Cart/CartProductCard";
import { useCart } from "../../contexts/cart-context";
import EmptyCartSvg from "../../components/Cart/EmptyCartSvg";

function Cart() {
  const cart = useCart();
  return (
    <div className="cart-page">
      <div class="h2 cart-heading">
        Shopping Cart{" "}
        {cart.cartState.cartTotalItems
          ? `(${cart.cartState.cartTotalItems})`
          : ""}
      </div>
      <div class="sidenav-section__div">
        <hr class="sidenav-section__divider" />
      </div>
      {cart.cartState.cartTotalItems === 0 ? (
        <>
          <h3 className="text-center">Your cart is empty.</h3>
          <EmptyCartSvg />
        </>
      ) : (
        <div class="cart-page-container grid-70-30">
          <div class="cart-items">
            {cart.cartState.cart.map((item) => (
              <CartProductCard item={item} />
            ))}
          </div>
          <div class="order-info-sidebar card">
            <div class="satisfaction-grt grid-30-70">
              <img
                src="https://i.postimg.cc/MTv3JmXd/ribbon.webp"
                alt="ribbon"
              />
              <div class="grt-msg">
                <h6 class="grt-msg-header">100 % satisfaction guarantee</h6>
                <h6 class="grt-msg-text">
                  Place your order with peace of mind.
                </h6>
              </div>
            </div>
            <div class="sidenav-section__div">
              <hr class="sidenav-section__divider" />
            </div>
            <h5>
              Subtotal{" "}
              <span class="h6">({cart.cartState.cartTotalItems} items)</span>:
              Rs. {cart.cartState.cartTotalAmount}
            </h5>
            <div class="sidenav-section__div">
              <hr class="sidenav-section__divider" />
            </div>
            <button class="btn btn-success">Proceed to buy</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
