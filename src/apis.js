import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export const BASE_URL = "https://mbasket-backend-api.herokuapp.com";
// export const BASE_URL = "http://127.0.0.1:8000";

export const apiClient = axios.create({
  xsrfHeaderName: "X-CSRFToken",
  xsrfCookieName: "csrftoken",
});

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
const csrftoken = Cookies.get("csrftoken");
console.log(`csrf token is ${csrftoken}`);

export const login = async (formData, token) => {
  try {
    const resp = await apiClient({
      method: "POST",
      url: `${BASE_URL}/login`,
      Authorization: {
        "Auth-Token": token ? token : "",
      },
      headers: {
        "Content-Type": "application/json",
        "X-CSRFTOKEN": csrftoken,
      },
      data: formData,
    });
    return resp.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error(error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.error(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error", error.message);
    }
    toast.error(error.response.data.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
};

export const logout = async (token) => {
  try {
    const resp = await apiClient({
      method: "GET",
      headers: {
        "Auth-Token": token ? token : "",
      },
      url: `${BASE_URL}/logout`,
    });
    console.log("in logout out api, below is resp.data");
    console.log(resp.data);
    console.log(`after signout resp auth token is ${token}`);
    return resp.data;
  } catch (error) {
    console.log(`after signout resp in error auth token is ${token}`);
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.data.non_field_errors[0]);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    console.log(error.config);
  }
};

export const register = async (formData) => {
  try {
    const resp = await apiClient({
      method: "POST",
      url: `${BASE_URL}/register`,
      headers: {
        "Content-Type": "application/json",
        "X-CSRFTOKEN": csrftoken,
      },
      data: formData,
    });
    if (resp.status === 201) {
      toast.success(resp.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (resp.status === 400) {
      toast.error(resp.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    return resp.data;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
    } else if (error.request) {
      console.log(error.request);
      console.log(error.request);
    }
    toast.error(error.response.data.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
};

export const getOtpEmail = async (formData, callback) => {
  try {
    const resp = await apiClient({
      method: "POST",
      url: `${BASE_URL}/generate_and_send_otp`,
      headers: {
        "Content-Type": "application/json",
        "X-CSRFTOKEN": csrftoken,
      },
      data: formData,
    });
    if (resp.status === 200) {
      toast.success(resp.data.message, {
        theme: "colored",
        autoClose: 10000,
      });
      callback(resp.data);
      return resp.data;
    }
  } catch (error) {
    // toast.error(error.response.data.message, {
    //   theme: "colored",
    // });
    callback(error.response.data);
    // return error.response.data;
  }
};

export const verifyOtp = async (formData, otpSessionKey, callback) => {
  try {
    formData.append("otp_session_key", otpSessionKey);
    const resp = await apiClient({
      method: "POST",
      url: `${BASE_URL}/verify_otp`,
      headers: {
        "Content-type": "application/json",
        "X-CSRFTOKEN": csrftoken,
      },
      data: formData,
    });
    if (resp.status === 200 && resp.data.status === "verified") {
      toast.success(resp.data.message, { theme: "colored", autoClose: 10000 });
    } else if (resp.status === 200) {
      toast.error(resp.data.message, { theme: "colored", autoClose: 10000 });
    }
    callback(resp.data);
  } catch (error) {
    console.error("error in verifying otp below");
    console.error(error.response.data);
    callback(error.response.data);
  }
};

export const deleteOtpFromDB = async (otp_session_key) => {
  let formData = new FormData();
  formData.append("otp_session_key", otp_session_key);
  try {
    const resp = await apiClient({
      method: "POST",
      url: `${BASE_URL}/delete_otp`,
      headers: {
        "Content-type": "application/json",
        "X-CSRFTOKEN": csrftoken,
      },
      data: formData,
    });
  } catch (error) {
    console.error("error in deleting otp from db below");
    console.error(error.response.data);
  }
};

export const resetPassword = async (formData, otpSessionKey, callback) => {
  formData.append("otp_session_key", otpSessionKey);
  try {
    const resp = await apiClient({
      method: "POST",
      url: `${BASE_URL}/reset_password`,
      headers: {
        "Content-type": "application/json",
        "X-CSRFTOKEN": csrftoken,
      },
      data: formData,
    });
    if (resp.status === 201) {
      toast.success(resp.data.message, { theme: "colored", autoClose: 10000 });
    }
    callback(resp.data);
  } catch (error) {
    console.error("error in reseting password below");
    console.error(error.response.data);
    callback(error.response.data);
  }
};
export const getCarouselsApi = async () => {
  const resp = await apiClient({
    method: "GET",
    url: `${BASE_URL}/get_carousels`,
  });
  return resp.data.data;
};

export const getCategoriesApi = async () => {
  const resp = await apiClient({
    method: "GET",
    url: `${BASE_URL}/get_categories`,
  });
  return JSON.parse(resp.data.data);
};

export const getFeaturedCategoriesApi = async () => {
  try {
    const resp = await apiClient({
      method: "GET",
      url: `${BASE_URL}/get_featured_categories`,
    });
    return resp.data.data;
  } catch (error) {
    console.error("error in getting feautred cats");
    console.error(error.response.data);
  }
};

export const testApiGetCategory = async (categorySlug) => {
  try {
    const resp = await apiClient({
      method: "GET",
      url: `${BASE_URL}/get_test_category`,
      params: { categorySlug: categorySlug },
    });
    return resp.data.category;
  } catch (error) {
    console.error("error in getting test category header");
    console.error(error.response.data);
  }
};

export const getCategoryItemsApi = async (categorySlug) => {
  try {
    const resp = await apiClient({
      method: "GET",
      url: `${BASE_URL}/get_category_items`,
      params: { categorySlug: categorySlug },
    });
    return resp.data;
  } catch (error) {
    console.error("error in getting items for product listing");
    console.error(error.response.data);
  }
};

export const getItemDetailApi = async (
  itemSlug,
  setItem,
  setPageLoading,
  navigate
) => {
  try {
    const resp = await apiClient({
      method: "GET",
      url: `${BASE_URL}/get_item_detail`,
      params: { slug: itemSlug },
    });
    if (resp.status === 200) {
      setItem(resp.data.item);
    } else if (resp.status === 204) {
      toast.error("No such item found");
      navigate("/", { replace: true });
    }
  } catch (error) {
    toast.error(error.response.data.message);
    navigate("/", { replace: true });
  } finally {
    setPageLoading(false);
  }
};

export const addItemToCartApi = async (
  itemSlug,
  token,
  cartDispatch,
  CART_ACTIONS,
  setBtnLoading
) => {
  try {
    setBtnLoading(true);
    let formData = new FormData();
    formData.append("slug", itemSlug);
    const resp = await apiClient({
      method: "POST",
      url: `${BASE_URL}/increase_item_to_cart`,
      Authorization: {
        "Auth-Token": token ? token : "",
      },
      headers: {
        "Content-Type": "application/json",
        "X-CSRFTOKEN": csrftoken,
        "Auth-Token": token ? token : "",
      },
      data: formData,
    });
    if (resp.status === 201) {
      cartDispatch({
        type: CART_ACTIONS.SET_CART_FROM_DB,
        payload: resp.data.cartState,
      });
    } else {
      toast.error("Something went wrong while adding item to cart.");
    }
  } catch (error) {
    console.error("error in adding item to cart");
    toast.error("Error from backend.");
    console.error(error.response.data);
  } finally {
    setBtnLoading(false);
  }
};

export const decreaseItemFromCartApi = async (
  itemSlug,
  token,
  cartDispatch,
  CART_ACTIONS,
  setBtnLoading
) => {
  setBtnLoading(true);
  let formData = new FormData();
  formData.append("slug", itemSlug);
  const resp = await apiClient({
    method: "POST",
    url: `${BASE_URL}/decrease_item_from_cart`,
    Authorization: {
      "Auth-Token": token ? token : "",
    },
    headers: {
      "Content-Type": "application/json",
      "X-CSRFTOKEN": csrftoken,
      "Auth-Token": token ? token : "",
    },
    data: formData,
  });
  if (resp.status === 201) {
    cartDispatch({
      type: CART_ACTIONS.SET_CART_FROM_DB,
      payload: resp.data.cartState,
    });
  } else {
    toast.error("Something went wrong while decreasing item qty from cart.");
  }
  setBtnLoading(false);
};

export const deleteItemFromCartApi = async (
  itemSlug,
  token,
  cartDispatch,
  CART_ACTIONS,
  setBtnLoading
) => {
  setBtnLoading(true);
  let formData = new FormData();
  formData.append("slug", itemSlug);
  const resp = await apiClient({
    method: "POST",
    url: `${BASE_URL}/delete_item_from_cart`,
    Authorization: {
      "Auth-Token": token ? token : "",
    },
    headers: {
      "Content-Type": "application/json",
      "X-CSRFTOKEN": csrftoken,
      "Auth-Token": token ? token : "",
    },
    data: formData,
  });
  if (resp.status === 201) {
    cartDispatch({
      type: CART_ACTIONS.SET_CART_FROM_DB,
      payload: resp.data.cartState,
    });
  } else {
    toast.error("Something went wrong while deleting item from cart.");
  }
  setBtnLoading(false);
};
export const getCartStateApi = async (token, cartDispatch, CART_ACTIONS) => {
  try {
    const resp = await apiClient({
      method: "GET",
      url: `${BASE_URL}/get_cart_state`,
      Authorization: {
        "Auth-Token": token ? token : "",
      },
      params: {
        authToken: token,
      },
    });
    if (resp.status === 200) {
      cartDispatch({
        type: CART_ACTIONS.SET_CART_FROM_DB,
        payload: resp.data.cartState,
      });
    }
  } catch (error) {
    console.error("error in getting cart from db");
    console.error(error.response.data);
  }
};

export const getWishlistStateApi = async (token, setWishlist) => {
  try {
    const resp = await apiClient({
      method: "GET",
      url: `${BASE_URL}/get_wishlist_state`,
      Authorization: {
        "Auth-Token": token ? token : "",
      },
      params: {
        authToken: token,
      },
    });
    if (resp.status === 200) {
      setWishlist((prev) => resp.data.wishlistState);
    }
  } catch (error) {
    console.error("error in getting wishlist from db");
    console.error(error.response.data);
  }
};
export const addToWishlistApi = async (
  token,
  itemSlug,
  setWishlist,
  setBtnLoading
) => {
  setBtnLoading(true);
  try {
    let formData = new FormData();
    formData.append("slug", itemSlug);
    const resp = await apiClient({
      method: "POST",
      url: `${BASE_URL}/add_item_to_wishlist`,
      Authorization: {
        "Auth-Token": token ? token : "",
      },
      headers: {
        "Content-Type": "application/json",
        "X-CSRFTOKEN": csrftoken,
        "Auth-Token": token ? token : "",
      },
      data: formData,
    });
    if (resp.status === 201) {
      setWishlist((prev) => resp.data.wishlistState);
    }
  } catch (error) {
    toast.error("Error adding item to wishlist,try later.");
    console.error(error.response.data);
  } finally {
    setBtnLoading(false);
  }
};

export const removeFromWishlistApi = async (
  token,
  itemSlug,
  setWishlist,
  setBtnLoading
) => {
  setBtnLoading(true);
  try {
    let formData = new FormData();
    formData.append("slug", itemSlug);
    const resp = await apiClient({
      method: "POST",
      url: `${BASE_URL}/remove_item_from_wishlist`,
      Authorization: {
        "Auth-Token": token ? token : "",
      },
      headers: {
        "Content-Type": "application/json",
        "X-CSRFTOKEN": csrftoken,
        "Auth-Token": token ? token : "",
      },
      data: formData,
    });
    if (resp.status === 201) {
      setWishlist((prev) => resp.data.wishlistState);
    }
  } catch (error) {
    toast.error("Error removing item from wishlist,try later.");
    console.log(error.response.data);
  } finally {
    setBtnLoading(false);
  }
};

export const moveFromWishlistToCartApi = async (
  token,
  itemSlug,
  itemInCart,
  itemMaxInCart,
  setWishlist,
  cartDispatch,
  CART_ACTIONS,
  setBtnLoading
) => {
  setBtnLoading(true);
  try {
    let formData = new FormData();
    formData.append("slug", itemSlug);
    formData.append("itemInCart", itemInCart);
    formData.append("itemMaxInCart", itemMaxInCart);
    const resp = await apiClient({
      method: "POST",
      url: `${BASE_URL}/move_from_wishlist_to_cart`,
      Authorization: {
        "Auth-Token": token ? token : "",
      },
      headers: {
        "Content-Type": "application/json",
        "X-CSRFTOKEN": csrftoken,
        "Auth-Token": token ? token : "",
      },
      data: formData,
    });
    if (resp.status === 201) {
      setWishlist((prev) => resp.data.wishlistState);
      cartDispatch({
        type: CART_ACTIONS.SET_CART_FROM_DB,
        payload: resp.data.cartState,
      });
    }
  } catch (error) {
    toast.error("Error moving item from wishlist to cart");
    console.log(error.response.data);
  } finally {
    setBtnLoading(false);
  }
};

export const moveFromCartToWishlistApi = async (
  token,
  itemSlug,
  setWishlist,
  cartDispatch,
  CART_ACTIONS,
  setBtnLoading
) => {
  setBtnLoading(true);
  try {
    let formData = new FormData();
    formData.append("slug", itemSlug);
    const resp = await apiClient({
      method: "POST",
      url: `${BASE_URL}/move_from_cart_to_wishlist`,
      Authorization: {
        "Auth-Token": token ? token : "",
      },
      headers: {
        "Content-Type": "application/json",
        "X-CSRFTOKEN": csrftoken,
        "Auth-Token": token ? token : "",
      },
      data: formData,
    });
    if (resp.status === 201) {
      setWishlist((prev) => resp.data.wishlistState);
      cartDispatch({
        type: CART_ACTIONS.SET_CART_FROM_DB,
        payload: resp.data.cartState,
      });
    }
  } catch (error) {
    toast.error("Error moving item from cart to wishlist");
    console.error(error.response.data);
  } finally {
    setBtnLoading(false);
  }
};
