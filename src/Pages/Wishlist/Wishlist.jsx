import React from "react";
import EmptyCartSvg from "../../components/Cart/EmptyCartSvg";
import EmptyWishlist from "../../components/Wishlist/EmptyWishlist";
import WishlistProductCard from "../../components/Wishlist/WishlistProductCard";
// import { wishlistItems } from "../../FakeData/data";
import "./Wishlist.css";

const Wishlist = () => {
  const wishlistItems = [];
  return (
    <>
      <div className="h2 cart-heading">
        Your wishlist {wishlistItems.length ? `(${wishlistItems.length})` : ""}
      </div>
      <div className="sidenav-section__div">
        <hr className="sidenav-section__divider" />
      </div>
      <div className="wishlist-page-container">
        {wishlistItems.length ? (
          <div className="wishlist-items">
            {/* Items in wishlist */}
            {wishlistItems.map((item) => (
              <WishlistProductCard item={item} />
            ))}
            {/* <WishlistProductCard /> */}
          </div>
        ) : (
          <EmptyWishlist />
        )}
      </div>
      <div className="spacer-8rem" />
    </>
  );
};

export default Wishlist;
