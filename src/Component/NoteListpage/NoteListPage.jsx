import React, { useState } from "react";
import { BsSearch, BsCheckCircle, BsPlusSquare } from "react-icons/bs";
import { IoColorPalette, IoCloseCircle } from "react-icons/io5";
import { ColorPalette } from "../../Component/index";
import "./NoteListpage.css";
import "../colorPalette/colorPalette.css";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useNotes, useTheme } from "../../Context/combineContext";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { modules, formats } from "../Editor/Constants";
import "../Editor/Editor.css";
import { initialDataOfNote } from "../constants/note-constants";
import toast from "react-hot-toast";

export const NoteListPage = ({
  isOpen,
  setisOpen,
  formtextArea,
  setFormTextArea,
  noteData,
  setNoteData,
}) => {
  const {
    setallNotes,
    isEditing,
    setEditing,
    EditItemId,
    dispatch,
    setPinnedNotes,
  } = useNotes();

  const { theme, setTheme } = useTheme();
  const [expand, setExpand] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setNoteData((prevData) => ({ ...prevData, [name]: value }));
    console.log(noteData);
  };

  const addNote = async () => {
    if (noteData.title === "" || formtextArea == "") {
      alert("please fill the data in inputs");
    } else {
      try {
        const { data } = await axios.post(
          "https://my-json-server.typicode.com/mariyasada/jsonAPI/notes",
          {
            id: uuidv4(),
            ...noteData,
            content: formtextArea,
            date: new Date().toLocaleDateString(),
          }
        );
        console.log(data, "adding note");
        setallNotes((prevdata) => [...prevdata, data]);
        toast("successfully note added", { icon: "✔" });
        setNoteData(initialDataOfNote);
        setFormTextArea("");
        setisOpen(false);
        setExpand(false);
      } catch (err) {
        console.error("something went wrong", err);
      }
    }
  };
  const cancleNoteInput = () => {
    setNoteData(initialDataOfNote);
    setFormTextArea("");
    setExpand(false);
    setisOpen(false);
  };

  const updateNote = async () => {
    if (noteData.title === "" || formtextArea == "") {
      alert("please fill the data in inputs");
    } else {
      try {
        const noteObj = {
          ...noteData,
          content: formtextArea,
          date: new Date().toLocaleDateString(),
        };
        const { data } = await axios.put(
          `https://my-json-server.typicode.com/mariyasada/jsonAPI/notes/${EditItemId}`,
          noteObj
        );
        toast("successfully note updateed", { icon: "✔" });
        setallNotes((prevdata) =>
          prevdata.map((note) =>
            note.id === EditItemId ? { ...note, ...noteObj } : note
          )
        );
        setPinnedNotes((prevdata) =>
          prevdata.map((note) =>
            note.id === EditItemId ? { ...note, ...noteObj } : note
          )
        );

        setFormTextArea("");
        setisOpen(false);
        setEditing(!isEditing);
        setNoteData(initialDataOfNote);
        setExpand(false);
      } catch (err) {
        console.error("something went wrong", err);
      }
    }
  };
  const handleInputChange = (e) => {
    setFormTextArea(e);
  };

  const handleExpandandColorPalette = () => {
    setisOpen((isOpen) => !isOpen);
    setExpand(true);
  };

  return (
    <div
      className="notes-with-searchbar-container"
      style={{ backgroundColor: theme === "light" ? "#202020" : "white" }}
    >
      <div className="search-input-center flex-center border-round">
        <BsSearch className="search-icon" />
        <input
          type="text"
          className={
            theme === "light"
              ? "input-searchbox input-searchbox-dark"
              : " input-searchbox  "
          }
          placeholder="Search"
          onChange={(e) =>
            dispatch({ type: "SEARCH_BY_QUERY", payload: e.target.value })
          }
        />
      </div>
      <form
        className={
          theme === "light"
            ? "add-notes-container-dark add-notes-container border-round flex-center flex-direction-column"
            : "add-notes-container border-round flex-center flex-direction-column"
        }
        style={{ backgroundColor: noteData.color }}
      >
        <div className="input-with-pin-icon-container flex-center">
          <input
            type="text"
            placeholder="Title"
            className={
              theme === "light"
                ? "title-of-note border-outline-none title-of-note-dark"
                : "title-of-note border-outline-none"
            }
            name="title"
            id="title"
            value={noteData.title}
            onChange={(e) => changeHandler(e)}
            onClick={() => setExpand(true)}
            required
          />
        </div>

        {expand ? (
          <div className="editor-quill flex-center">
            <ReactQuill
              theme="snow"
              value={formtextArea}
              onChange={(e) => handleInputChange(e)}
              modules={modules}
              formats={formats}
              className="editor-of-note"
              placeholder="Add a note..."
            />
          </div>
        ) : null}
        <div className=""></div>
        <div className="label-with-icons-container flex-center">
          <div className="label-container flex-center">
            <label htmlFor="tags" className="text-size-sm">
              Tag:
            </label>
            <select
              className="tag"
              name="tag"
              id="tag"
              onChange={(e) => changeHandler(e)}
              value={noteData.tag}
            >
              <option value="Work">Work</option>
              <option value="Home">Home</option>
              <option value="Class">Class</option>
              <option value="Exercise">Exercise</option>
              <option value="Teams">Teams</option>
            </select>
          </div>
          <div className="priorityioption-container flex-center">
            <label htmlFor="priority" className="text-size-sm">
              Priority:
            </label>
            <select
              className="priority"
              name="priority"
              id="priority"
              onChange={(e) => changeHandler(e)}
              value={noteData.priority}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="label-add-container flex-center">
            <label
              htmlFor="label"
              className="text-size-sm flex-center label-add"
            >
              Label:
              <input
                type="text"
                name="label"
                className="label-input"
                value={noteData.label}
                onChange={(e) => changeHandler(e)}
              />
            </label>
          </div>

          <div
            className={
              theme === "light"
                ? "close-icon-color-palatte-container flex-center icons-theme-dark"
                : "close-icon-color-palatte-container flex-center"
            }
          >
            <IoColorPalette onClick={handleExpandandColorPalette} />
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
          setNoteData={setNoteData}
        />
      )}
    </div>
  );
};
