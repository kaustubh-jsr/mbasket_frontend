import React from "react";
import EmptyWishlist from "../../components/Wishlist/EmptyWishlist";
import WishlistProductCard from "../../components/Wishlist/WishlistProductCard";
import { useWishlist } from "../../contexts/wishlist-context";
import "./Wishlist.css";

const Wishlist = () => {
  const { wishlist } = useWishlist();
  return (
    <>
      <div className="h2 cart-heading">
        Your wishlist {wishlist.length ? `(${wishlist.length})` : ""}
      </div>
      <div className="sidenav-section__div">
        <hr className="sidenav-section__divider" />
      </div>
      <div className="wishlist-page-container">
        {wishlist.length ? (
          <div className="wishlist-items">
            {/* Items in wishlist */}
            {wishlist.map((item) => (
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
