import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "../App";
import { AuthProvider } from "../contexts/auth-context";
import { CartProvider } from "../contexts/cart-context";
import Cart from "../Pages/Cart/Cart";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Authentication/Login";
import ProductListing from "../Pages/ProductListing/ProductListing";
import { Register } from "../Pages/Authentication/Register";
import { ToastContainer } from "react-toastify";
import RequireAuth from "./RequireAuth";
import ForgotPassword from "../Pages/Authentication/ForgotPassword";
import Page404 from "../Pages/Page404";
import Wishlist from "../Pages/Wishlist/Wishlist";

function BasketRouter() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <Routes>
              <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="forgot_password" element={<ForgotPassword />} />
                <Route path="register" element={<Register />} />
                <Route
                  path="category/:categorySlug"
                  element={<ProductListing />}
                />
                <Route
                  path="cart"
                  element={
                    <RequireAuth>
                      <Cart />
                    </RequireAuth>
                  }
                />
                <Route
                  path="wishlist"
                  element={
                    <RequireAuth>
                      <Wishlist />
                    </RequireAuth>
                  }
                />
                <Route path="*" element={<Page404 />} />
              </Route>
            </Routes>
            <ToastContainer style={{ fontSize: "1.5rem" }} />
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default BasketRouter;
