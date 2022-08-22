import { useContext, createContext, useState, useEffect } from "react";
import { getWishlistStateApi } from "../apis";
import { useAuth } from "./auth-context";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const auth = useAuth();
  useEffect(() => {
    if (auth.token) {
      getWishlistStateApi(auth.token, setWishlist);
    } else {
      setWishlist([]);
    }
  }, [auth.token]);
  return (
    <WishlistContext.Provider value={{ wishlist, setWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
