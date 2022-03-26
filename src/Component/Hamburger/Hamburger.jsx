import React from "react";
import { Link } from "react-router-dom";
import "../Hamburger/Hamburger.css";
import "../Sidebar/Sidebar.css";

export const Hamburger = () => {
  return (
    <div>
      <ul className="hamburger-menu-container">
        <Link to="/notepage" className="hamburger-menu-item">
          Home
        </Link>
        <Link to="/" className="hamburger-menu-item">
          Profile
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
