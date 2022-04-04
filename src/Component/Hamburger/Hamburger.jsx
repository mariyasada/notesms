import React from "react";
import { Link } from "react-router-dom";
import "../Hamburger/Hamburger.css";
import "../Sidebar/Sidebar.css";
import { useTheme } from "../../Context/theme-context";

export const Hamburger = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <ul
        className="hamburger-menu-container"
        style={{ backgroundColor: theme === "light" ? "#202020" : "white" }}
      >
        <Link to="/notepage" className="hamburger-menu-item">
          Home
        </Link>
        <Link to="/" className="hamburger-menu-item">
          Profile
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
      </ul>
    </div>
  );
};
