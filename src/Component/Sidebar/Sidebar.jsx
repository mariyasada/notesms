import React, { useState } from "react";
import { FaHome, FaBookmark } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BiArchiveIn, BiTrash, BiNote } from "react-icons/bi";
import { BsPlusCircle } from "react-icons/bs";
import "./Sidebar.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FilterBar } from "../../Component/index";
import { useTheme } from "../../Context/theme-context";

export const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const [tagList, setTagList] = useState([]);
  const [inputTag, setInputTag] = useState("");
  const [isFilterBox, setIsFilterBox] = useState(true);

  const { pathname } = useLocation();

  const addTagtoSidebar = () => {
    console.log(inputTag, "inputvalue");
    setTagList((prevdata) => [...prevdata, inputTag]);
    setInputTag("");
  };

  const getActiveLinkStyle = ({ isActive }) => ({
    color: isActive ? "#d69d66" : "",
  });
  return (
    <div
      className={
        theme === "light"
          ? " sidebar-item-container-dark sidebar-item-container flex-center "
          : "sidebar-item-container flex-center "
      }
    >
      <ul>
        <Link to="/">
          <li className="sidebar-item-with-icon flex-center">
            <CgProfile className="sidebar-icon" />
            <h2 className="sidebar-item-title">Profile</h2>
          </li>
        </Link>
        <Link to="/">
          <li className="sidebar-item-with-icon flex-center">
            <FaHome className="sidebar-icon" />
            <h2 className="sidebar-item-title">Home</h2>
          </li>
        </Link>
        <NavLink to="/notepage" style={getActiveLinkStyle}>
          <li className="sidebar-item-with-icon flex-center">
            <BiNote className="sidebar-icon" />
            <h2 className="sidebar-item-title">Notes</h2>
          </li>
        </NavLink>
        <NavLink to="/archivepage" style={getActiveLinkStyle}>
          <li className="sidebar-item-with-icon flex-center">
            <BiArchiveIn className="sidebar-icon" />
            <h2 className="sidebar-item-title">Archive</h2>
          </li>
        </NavLink>
        <NavLink to="/deletednotepage" style={getActiveLinkStyle}>
          <li className="sidebar-item-with-icon flex-center">
            <BiTrash className="sidebar-icon" />
            <h2 className="sidebar-item-title">Trash</h2>
          </li>
        </NavLink>
        {tagList.map((tag) => {
          return (
            <li className="sidebar-item-with-icon flex-center">
              <h2 className="sidebar-item-title"> {tag}</h2>
            </li>
          );
        })}
        <li className="input-with-icon flex-center">
          <input
            className={
              theme === "light" ? "input-tag input-tag-dark" : "input-tag"
            }
            placeholder="Enter Tag here"
            value={inputTag}
            onChange={(e) => setInputTag(e.target.value)}
          />
          <BsPlusCircle
            className="sidebar-icon-plus"
            onClick={addTagtoSidebar}
          />
        </li>
      </ul>

      {isFilterBox && pathname === "/notepage" ? <FilterBar /> : null}
    </div>
  );
};
