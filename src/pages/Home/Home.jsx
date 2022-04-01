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
      style={{ backgroundColor: theme === "light" ? "black" : "white" }}
    >
      <div className="heading-of-notes">
        <h1 className="heading">
          <span className="name-of-app">MS</span> Notes
        </h1>
      </div>
      <div
        className="image-quote-container flex-center"
        style={{ backgroundColor: theme === "light" ? "black" : "white" }}
      >
        <div className="image-container">
          <img
            className="image-of-homepage"
            src="./assets/notes.png"
            alt="notes image"
          />
        </div>
        <div className="quote-of-app">
          <p className="quote">
            Organized your day by saving your thoughts with us.
          </p>
          <span className="btn-container flex-center">
            <Link to="/notepage">
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
