// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import BasketRouter from "./Router/BasketRouter";
import "react-toastify/dist/ReactToastify.min.css";

// The routes are nested in the parent App route, which has the MainLayout Component(holding the navbar and footer)
// The App component renders the MainLayout and a nested Outlet component for the nested routes to render their elements there.
// By default at '/' path the index route renders the home page, and at '/login' the login page renders etc.
// The outlet swaps between the current three routes of home, login and register
ReactDOM.render(
  <React.StrictMode>
    <BasketRouter />
  </React.StrictMode>,
  document.getElementById("root")
);
