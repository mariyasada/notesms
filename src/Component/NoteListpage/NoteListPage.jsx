import React from "react";
import { BsSearch, BsPinFill } from "react-icons/bs";
import { IoColorPalette, IoCloseCircle } from "react-icons/io5";
import { useState } from "react";
import { ColorPalette } from "../../Component/index";
import "./NoteListpage.css";
import "../colorPalette/colorPalette.css";

export const NoteListPage = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="notes-with-searchbar-container">
      <div className="search-input-center flex-center border-round">
        <BsSearch className="search-icon" />
        <input type="text" className="input-searchbox" placeholder="Search" />
      </div>
      <div className="add-notes-container border-round flex-center flex-direction-column">
        <div className="input-with-pin-icon-container flex-center">
          <input
            type="text"
            placeholder="Enter Title"
            className="title-of-note border-outline-none"
          />
          <BsPinFill className="note-icon" />
        </div>
        <textarea
          type="text"
          placeholder="Enter Text Here"
          className="details-of-note border-outline-none"
        />
        <div className="close-icon-color-palatte-container flex-center">
          <IoColorPalette onClick={() => setisOpen((isOpen) => !isOpen)} />
          <IoCloseCircle />
        </div>
      </div>
      {isOpen && (
        <ColorPalette className="colors-selector-container flex-center border-round" />
      )}
    </div>
  );
};
