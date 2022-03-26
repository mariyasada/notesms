import React from "react";
import { FaHome, FaBookmark } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BiArchiveIn, BiTrash } from "react-icons/bi";
import { BsPlusCircle } from "react-icons/bs";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="sidebar-item-container flex-center">
      <ul className="sidebar-items">
        <li className="sidebar-item-with-icon flex-center">
          <CgProfile className="sidebar-icon" />
          <h2 className="sidebar-item-title">Profile</h2>
        </li>
        <Link to="/notepage">
          <li className="sidebar-item-with-icon flex-center">
            <FaHome className="sidebar-icon" />
            <h2 className="sidebar-item-title">Home</h2>
          </li>
        </Link>
        <Link to="/archivepage">
          <li className="sidebar-item-with-icon flex-center">
            <BiArchiveIn className="sidebar-icon" />
            <h2 className="sidebar-item-title">Archive</h2>
          </li>
        </Link>
        <Link to="/deletednotepage">
          <li className="sidebar-item-with-icon flex-center">
            <BiTrash className="sidebar-icon" />
            <h2 className="sidebar-item-title">Trash</h2>
          </li>
        </Link>
        <li className="input-with-icon flex-center">
          <input className="input-tag" placeholder="Enter Tag here" />
          <BsPlusCircle className="sidebar-icon-plus" />
        </li>
      </ul>
    </div>
  );
};
