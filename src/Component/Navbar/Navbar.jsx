import React from "react";
import { Link } from "react-router-dom";
import "../../pages/Home/Home";
import "./Navbar.css";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { GiCancel } from "react-icons/gi";
import "../Hamburger/Hamburger.css";
import { Hamburger } from "../Hamburger/Hamburger";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="Header-container flex-center">
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
      {open && <Hamburger className="hamburger-menu-container" />}
    </div>
  );
};
