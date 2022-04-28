import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";
import { CartContext, useCart } from "../contexts/cart-context";
import "./MainNav.css";

export const MainNav = () => {
  const { cartState } = useCart();
  const navigate = useNavigate();
  const auth = useAuth();

  const logoutHandler = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <nav className="main-nav">
      <Link to="/" className="img-container nav-logo-container">
        <img
          src="https://i.postimg.cc/7656JpSC/logo-ecomm-no-padding.jpg"
          alt="mantra-logo"
        />
      </Link>
      <input
        type="text"
        className="search-bar"
        placeholder="Search among 5000+ items in 10+ daily needs categories"
      />
      <ul className="nav-links primary-nav-side-links flex">
        <li>
          {auth.token ? (
            <button className="btn btn-warning" onClick={logoutHandler}>
              Log out
            </button>
          ) : (
            <Link to="/login" className="btn btn-warning">
              Log in
            </Link>
          )}
        </li>
        <li>
          <Link
            to="wishlist"
            className="badge-container icon-for-badge icon-md btn-cart"
          >
            <i className="fas fa-heart"></i>
            {/* <span className="icon-badge">5</span> */}
          </Link>
        </li>
        <li>
          <Link
            to="cart"
            className="badge-container icon-for-badge icon-md btn-cart"
          >
            <i className="fas fa-shopping-cart"></i>
            {cartState.cartTotalItems ? (
              <span className="icon-badge">{cartState.cartTotalItems}</span>
            ) : (
              ""
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
