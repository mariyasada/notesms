import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Hamburger/Hamburger.css";
import "../Sidebar/Sidebar.css";
import { useTheme } from "../../Context/theme-context";
import { useAuth } from "../../Context/auth-context";
import { FilterBar } from "../FilterBox/FilterBar";

export const Hamburger = () => {
  const { theme, setTheme } = useTheme();
  const { userData, logOut } = useAuth();
  const [isLight, setIsLight] = useState(false);
  const navigate = useNavigate();

  const themeClickHandler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    setIsLight(!isLight);
  };
  return (
    <div>
      <ul
        className="hamburger-menu-container"
        style={{ backgroundColor: theme === "light" ? "#202020" : "white" }}
      >
        <Link to="/" className="hamburger-menu-item">
          Home
        </Link>
        <Link to="/notepage" className="hamburger-menu-item">
          Notes
        </Link>
        <Link to="/archivepage" className="hamburger-menu-item">
          Archive
        </Link>
        <Link to="/deletednotepage" className="hamburger-menu-item">
          Trash
        </Link>
        {isLight ? (
          <li className="hamburger-menu-item" onClick={themeClickHandler}>
            Light Theme
          </li>
        ) : (
          <li className="hamburger-menu-item" onClick={themeClickHandler}>
            Dark Theme
          </li>
        )}

        {userData ? (
          <Link to="/" className="hamburger-menu-item" onClick={logOut}>
            Logout
          </Link>
        ) : (
          <Link to="/login" className="hamburger-menu-item">
            Login
          </Link>
        )}
        <div className="filters">
          <FilterBar />
        </div>
      </ul>
    </div>
  );
};
