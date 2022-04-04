import React, { useState } from "react";
import { Footer } from "../../Component";
import "./Home.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../Context/theme-context";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";

export const HomePage = () => {
  const { theme, setTheme } = useTheme();
  const [isLight, setIsLight] = useState(false);

  const themeClickHandler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    setIsLight(!isLight);
    console.log(theme);
  };
  return (
    <div
      className="HomePage-container flex-center flex-direction-column "
      style={{ backgroundColor: theme === "light" ? "#202020" : "white" }}
    >
      {/* <div className="heading-theme-icon-container flex-center">
        <div className="heading-of-notes">
          <h1 className="heading">
            <span className="name-of-app">MS</span> Notes
          </h1>
        </div>

        <div
          className="theme-icon-home-page"
          style={{ color: theme === "light" ? "white" : "" }}
        >
          {isLight ? (
            <FiSun onClick={themeClickHandler} />
          ) : (
            <FaMoon onClick={themeClickHandler} />
          )}
        </div>
      </div> */}
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
