import React from "react";
import { Link } from "react-router-dom";
import "./Page404.css";

const Page404 = () => {
  return (
    <div className="page-404">
      <h2 class="text-center">
        This page contains nothing but scraps, we have are real offerings listed{" "}
        <Link to="/" style={{ textDecoration: "underline" }}>
          here
        </Link>
      </h2>
      <div className="img-container">
        <img
          src="https://i.imgur.com/kZNTPqI.png"
          alt="404 page not found"
          className="img-responsive"
        />
      </div>
    </div>
  );
};

export default Page404;
