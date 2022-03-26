import React from "react";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer>
      <div class="footer-links">
        <Link
          to="https://mobile.twitter.com/kaustubh_796"
          class="fab fa-twitter"
        ></Link>
        <Link to="https://github.com/kaustubh-jsr" class="fab fa-github"></Link>
        <Link to="/" class="fab fa-linkedin"></Link>
      </div>
      <div class="footer-text">© No Copyright, Feel free to replicate.</div>
    </footer>
  );
};
