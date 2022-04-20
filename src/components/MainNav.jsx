import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/cart-context";
import "./MainNav.css";

export const MainNav = () => {
  const cart = useContext(CartContext);

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
          <Link to="/login" className="btn btn-warning">
            Log in
          </Link>
        </li>
        <li>
          <Link
            to="./pages/wishlist-page.html"
            className="badge-container icon-for-badge icon-md btn-cart"
          >
            <i className="fas fa-heart"></i>
            <span className="icon-badge">5</span>
          </Link>
        </li>
        <li>
          <Link
            to="cart"
            className="badge-container icon-for-badge icon-md btn-cart"
          >
            <i className="fas fa-shopping-cart"></i>
            <span className="icon-badge">{cart.state.quantity}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
