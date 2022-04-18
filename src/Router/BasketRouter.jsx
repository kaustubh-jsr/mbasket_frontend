import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "../App";
import { CartProvider } from "../contexts/cart-context";
import Cart from "../Pages/Cart/Cart";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import ProductListing from "../Pages/ProductListing/ProductListing";
import { Register } from "../Pages/Register";

function BasketRouter() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="category/:categorySlug" element={<ProductListing />} />
            <Route path="cart" element={<Cart />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default BasketRouter;
