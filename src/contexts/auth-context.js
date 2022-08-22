import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getUserDetails as getUserDetailsApi,
  login as loginApi,
  logout as logoutApi,
  register as registerApi,
} from "../apis";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    //api call to set user details from backend
    if (token) {
      console.log("setting user details from backend");
      (async () => {
        const resp = await getUserDetailsApi(token);
        setUserDetails(resp.userDetails);
        console.log(resp.userDetails);
      })();
    } else {
      // cartDispatch({ type: CART_ACTIONS.RESET_CART });
    }
  }, [token]);
  const login = async (formData, callback) => {
    setLoading(true);
    const resp = await loginApi(formData, token);
    if (resp && resp.auth_token) {
      localStorage.setItem("token", resp.auth_token);
      setToken(resp.auth_token);
      callback();
    } else {
      console.log(
        "resp received but no auth token, something wrong with API or credentials"
      );
    }
    setLoading(false);
  };

  const register = async (formData, callback) => {
    setLoading(true);
    const resp = await registerApi(formData);
    if (resp) {
      callback();
    }
    setLoading(false);
  };

  const logout = async () => {
    const resp = await logoutApi(token);
    console.log("below is resp from logout api");
    console.log(resp);
    localStorage.removeItem("token");
    setToken("");
  };

  const value = {
    token,
    userDetails,
    login,
    register,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthContext, AuthProvider, useAuth };
