import React from "react";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <Link
          to="https://mobile.twitter.com/kaustubh_796"
          className="fab fa-twitter"
        ></Link>
        <Link
          to="https://github.com/kaustubh-jsr"
          className="fab fa-github"
        ></Link>
        <Link to="/" className="fab fa-linkedin"></Link>
      </div>
      <div className="footer-text">© No Copyright, Feel free to replicate.</div>
    </footer>
  );
};
