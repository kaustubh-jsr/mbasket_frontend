import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

// export const BASE_URL = "http://127.0.0.1:8000";
export const BASE_URL = "https://mbasket-backend-api.herokuapp.com";

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
    console.log("before resp");
    console.log(resp.data);
    console.log("after resp");
    return resp.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
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
    console.log("top verification result success");
    console.log(resp.data);
    if (resp.status === 200 && resp.data.status === "verified") {
      console.log("otp correct");
      toast.success(resp.data.message, { theme: "colored", autoClose: 10000 });
    } else if (resp.status === 200) {
      console.log("otp incorrect");
      toast.error(resp.data.message, { theme: "colored", autoClose: 10000 });
    }
    callback(resp.data);
  } catch (error) {
    console.log("error in verifying otp below");
    console.log(error.response.data);
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
    console.log(resp.data);
  } catch (error) {
    console.log("error in deleting otp from db below");
    console.log(error.response.data);
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
    console.log("error in reseting password below");
    console.log(error.response.data);
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
    console.log("error in getting feautred cats");
    console.log(error.response.data);
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
    console.log("error in getting test category header");
    console.log(error.response.data);
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
    console.log("error in getting items for product listing");
    console.log(error.response.data);
  }
};
