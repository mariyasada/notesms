import React from "react";
import { Link } from "react-router-dom";
import "../../pages/Home/Home";
import "./Navbar.css";
import { useState } from "react";
import { FiMenu, FiSun } from "react-icons/fi";
import { GiCancel } from "react-icons/gi";
import { FaMoon, FaRegSun } from "react-icons/fa";
import "../Hamburger/Hamburger.css";
import { Hamburger } from "../Hamburger/Hamburger";
import { useTheme } from "../../Context/theme-context";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const { theme, setTheme } = useTheme();

  const themeClickHandler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    setIsLight(!isLight);
    console.log(theme);
  };
  return (
    <div
      className={
        theme === "light"
          ? " Header-container-dark flex-center"
          : "Header-container flex-center"
      }
    >
      <div className="menu-icon">
        {open ? (
          <GiCancel className="menu-icon" onClick={() => setOpen(!open)} />
        ) : (
          <FiMenu className="menu-icon" onClick={() => setOpen(!open)} />
        )}
      </div>
      <div className="heading-in-note-page">
        <Link to="/">
          <h1 className="heading">
            <span className="name-of-app">MS</span> Notes
          </h1>
        </Link>
      </div>
      <div
        className="theme-icon"
        style={{ color: theme === "light" ? "white" : "" }}
      >
        {isLight ? (
          <FiSun onClick={themeClickHandler} />
        ) : (
          <FaMoon onClick={themeClickHandler} />
        )}
      </div>
      {open && <Hamburger className="hamburger-menu-container" />}
    </div>
  );
};
