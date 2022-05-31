import React from "react";
import { Footer } from "../../Component";
import "./Home.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../Context/theme-context";

export const HomePage = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className="HomePage-container flex-center flex-direction-column "
      style={{ backgroundColor: theme === "light" ? "#202020" : "white" }}
    >
      <div
        className="image-quote-container flex-center"
        style={{ backgroundColor: theme === "light" ? "#202020" : "white" }}
      >
        <div className="image-container">
          <img
            className="image-of-homepage"
            src="./assets/notes-bg.png"
            alt="notes image"
          />
        </div>
        <div className="quote-of-app">
          <p className={theme === "light" ? "quote quote-dark" : "quote"}>
            Organized your day by saving your thoughts with us.
          </p>
          <span className="btn-container flex-center">
            <Link to="/login">
              <button className="btn btn-primary-first border-round">
                TRY MS NOTES
              </button>
            </Link>
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};
