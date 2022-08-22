import getSortedData from "./sortProducts";
import getDiscountFilteredData from "./filterDiscounts";
import getStockFilteredData from "./filterOutOfStock";
import getSubcatFilteredData from "./filterSubcats";
import { loginFormValidator } from "./formValidators";
import { registerFormValidator } from "./formValidators";
import { incCartQty, decCartQty, addToWishlist } from "./cartWishlistFunctions";
export {
  getSortedData,
  getDiscountFilteredData,
  getStockFilteredData,
  getSubcatFilteredData,
  loginFormValidator,
  registerFormValidator,
  incCartQty,
  decCartQty,
  addToWishlist,
};
