import React from "react";
import { FaHome, FaBookmark } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BiArchiveIn, BiTrash, BiNote } from "react-icons/bi";
import { BsPlusCircle } from "react-icons/bs";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Sidebar = () => {
  const [tagList, setTagList] = useState([]);
  const [inputTag, setInputTag] = useState("");

  const addTagtoSidebar = () => {
    console.log(inputTag, "inputvalue");
    setTagList((prevdata) => [...prevdata, inputTag]);
    setInputTag("");
    console.log(tagList);
  };
  return (
    <div className="sidebar-item-container flex-center">
      <ul className="sidebar-items">
        <li className="sidebar-item-with-icon flex-center">
          <CgProfile className="sidebar-icon" />
          <h2 className="sidebar-item-title">Profile</h2>
        </li>
        <Link to="/">
          <li className="sidebar-item-with-icon flex-center">
            <FaHome className="sidebar-icon" />
            <h2 className="sidebar-item-title">Home</h2>
          </li>
        </Link>
        <Link to="/notepage">
          <li className="sidebar-item-with-icon flex-center">
            <BiNote className="sidebar-icon" />
            <h2 className="sidebar-item-title">Notes</h2>
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
        {tagList.map((tag) => {
          return (
            <li className="sidebar-item-with-icon flex-center">
              <h2 className="sidebar-item-title"> {tag}</h2>
            </li>
          );
        })}
        <li className="input-with-icon flex-center">
          <input
            className="input-tag"
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
    </div>
  );
};
