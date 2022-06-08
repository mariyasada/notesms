import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../Context/theme-context";
import "../NotFound/errorpage.css";

export const PageNotFound = () => {
  const { theme } = useTheme();
  return (
    <div
      className="wrapper flex-center"
      style={{ backgroundColor: theme === "light" ? "black" : "white" }}
    >
      <img
        src="./assets/error-page.png"
        alt="not-found"
        className="error-image-container"
      />
      <div className="errorpage-message flex-center flex-direction-column">
        <span className="error-status">404 </span>
        <p style={{ color: theme === "light" ? "#d69d66" : "" }}>
          Aha!!! You see ! You can be wrong ! or it could be us you should
          probably
        </p>
        <Link to="/" className="link-to-homepage">
          Go back to homepage
        </Link>
      </div>
    </div>
  );
};
