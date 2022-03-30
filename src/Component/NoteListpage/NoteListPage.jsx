import React, { useState } from "react";
import { BsSearch, BsCheckCircle, BsPlusSquare } from "react-icons/bs";
import { IoColorPalette, IoCloseCircle } from "react-icons/io5";
import { ColorPalette } from "../../Component/index";
import "./NoteListpage.css";
import "../colorPalette/colorPalette.css";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useNotes } from "../../Context/note-context";

export const NoteListPage = ({
  isOpen,
  setisOpen,
  forminput,
  setFormInput,
  formtextArea,
  setFormTextArea,
  listColor,
  setListColor,
  tagState,
  setTagState,
}) => {
  const {
    allNotes,
    setallNotes,
    isEditing,
    setEditing,
    setEditItemId,
    EditItemId,
  } = useNotes();

  const addNote = async () => {
    if (forminput === "" || formtextArea == "") {
      alert("please fill the data in inputs");
    } else {
      try {
        const { data } = await axios.post(
          "https://my-json-server.typicode.com/mariyasada/jsonAPI/notes",
          {
            id: uuidv4(),
            title: forminput,
            content: formtextArea,
            color: listColor,
            date: new Date().toLocaleDateString(),
            tag: tagState,
          }
        );

        setallNotes((prevdata) => [...prevdata, data]);
        setFormInput("");
        setFormTextArea("");
        setisOpen(false);
      } catch (err) {
        console.error("something went wrong", err);
      }
    }
  };
  const cancleNoteInput = () => {
    setFormInput("");
    setFormTextArea("");
  };

  const updateNote = async () => {
    console.log(EditItemId);
    if (forminput === "" || formtextArea == "") {
      alert("please fill the data in inputs");
    } else {
      try {
        const { data } = await axios.put(
          `https://my-json-server.typicode.com/mariyasada/jsonAPI/notes/${EditItemId}`,
          {
            id: uuidv4(),
            title: forminput,
            content: formtextArea,
            color: listColor,
            date: new Date().toLocaleDateString(),
            tag: tagState,
          }
        );
        console.log(data, "updated data");
        setFormInput("");
        setFormTextArea("");
        setisOpen(false);
        setEditing(!isEditing);
      } catch (err) {
        console.error("something went wrong", err);
      }
    }
  };
  return (
    <div className="notes-with-searchbar-container">
      <div className="search-input-center flex-center border-round">
        <BsSearch className="search-icon" />
        <input type="text" className="input-searchbox" placeholder="Search" />
      </div>
      <form className="add-notes-container border-round flex-center flex-direction-column">
        <div className="input-with-pin-icon-container flex-center">
          <input
            type="text"
            placeholder="Enter Title"
            className="title-of-note border-outline-none"
            name="title"
            value={forminput}
            onChange={(e) => setFormInput(e.target.value)}
            required
          />
          {/* <BsPin className="note-icon" /> */}
        </div>
        <textarea
          type="text"
          placeholder="Enter Text Here"
          className="details-of-note border-outline-none"
          name="content"
          value={formtextArea}
          onChange={(e) => setFormTextArea(e.target.value)}
          required
        />
        <div className="label-with-icons-container flex-center">
          <div className="label-container">
            <select
              className="tag"
              onChange={(e) => setTagState(e.target.value)}
              value={tagState}
            >
              <option value="Work">Work</option>
              <option value="Home">Home</option>
              <option value="Class">Class</option>
              <option value="Exercise">Exercise</option>
              <option value="Teams">Teams</option>
            </select>
          </div>
          <div className="close-icon-color-palatte-container flex-center">
            <IoColorPalette onClick={() => setisOpen((isOpen) => !isOpen)} />
            {isEditing ? (
              <BsCheckCircle onClick={updateNote} />
            ) : (
              <BsPlusSquare onClick={addNote} />
            )}

            <IoCloseCircle onClick={cancleNoteInput} />
          </div>
        </div>
      </form>
      {isOpen && (
        <ColorPalette
          className="colors-selector-container flex-center border-round"
          listColor={listColor}
          setListColor={setListColor}
        />
      )}
    </div>
  );
};
