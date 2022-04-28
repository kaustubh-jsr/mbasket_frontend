import React, { createContext, useContext, useEffect, useState } from "react";
import {
  login as loginApi,
  logout as logoutApi,
  register as registerApi,
} from "../apis";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(false);

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
    login,
    register,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthContext, AuthProvider, useAuth };
