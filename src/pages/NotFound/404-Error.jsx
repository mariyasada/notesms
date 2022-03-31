import React from "react";
import { Link } from "react-router-dom";
import "../NotFound/errorpage.css";

export const PageNotFound = () => {
  return (
    <div className="wrapper flex-center">
      <img
        src="./assets/error-page.png"
        alt="not-found"
        className="error-image-container"
      />
      <div className="errorpage-message flex-center flex-direction-column">
        <span className="error-status">404 </span> Aha!!! You see ! You can be
        wrong ! or it could be us you should probably
        <Link to="/" className="link-to-homepage">
          Go back to homepage
        </Link>
      </div>
    </div>
  );
};
