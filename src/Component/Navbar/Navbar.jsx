import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../pages/Home/Home";
import "./Navbar.css";
import { useState } from "react";
import { FiMenu, FiSun, FiLogOut } from "react-icons/fi";
import { GiCancel } from "react-icons/gi";
import { FaMoon, FaRegSun, FaUserAlt } from "react-icons/fa";
import "../Hamburger/Hamburger.css";
import { Hamburger } from "../Hamburger/Hamburger";
import { useTheme } from "../../Context/theme-context";
import { useAuth } from "../../Context/auth-context";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const { theme, setTheme } = useTheme();
  const { userData, logOutHandler } = useAuth();
  const navigate = useNavigate();

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
      <div
        className="menu-icon"
        style={{ color: theme === "light" ? "red" : "black" }}
      >
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
        className="theme-icon flex-center gap-2"
        style={{ color: theme === "light" ? "white" : "" }}
      >
        {userData ? (
          <FiLogOut onClick={logOutHandler} />
        ) : (
          <FaUserAlt className="user-alt" onClick={() => navigate("/login")} />
        )}

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
