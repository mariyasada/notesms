import React, { useState } from "react";
import { BsSearch, BsCheckCircle, BsPlusSquare } from "react-icons/bs";
import { IoColorPalette, IoCloseCircle } from "react-icons/io5";
import { FaBold } from "react-icons/fa";
import { ColorPalette } from "../../Component/index";
import "./NoteListpage.css";
import "../colorPalette/colorPalette.css";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useNotes } from "../../Context/note-context";
import { useTheme } from "../../Context/theme-context";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { modules, formats } from "../Editor/Constants";
import "../Editor/Editor.css";

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
  priorityState,
  setPriorityState,
  pinnedNotes,
  setPinnedNotes,
  setlabelInput,
  labelinput,
}) => {
  const {
    allNotes,
    setallNotes,
    isEditing,
    setEditing,
    setEditItemId,
    EditItemId,
    state,
    dispatch,
  } = useNotes();

  const { theme, setTheme } = useTheme();
  const [expand, setExpand] = useState(false);

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
            priority: priorityState,
            label: labelinput,
          }
        );
        console.log(data, "adding");

        setallNotes((prevdata) => [...prevdata, data]);
        setFormInput("");
        setFormTextArea("");
        setisOpen(false);
        // setTagState("");
        // setPriorityState("");
        setListColor("");
        setlabelInput("");
        setExpand(false);
      } catch (err) {
        console.error("something went wrong", err);
      }
    }
  };
  const cancleNoteInput = () => {
    setFormInput("");
    setFormTextArea("");
    setExpand(false);
    setisOpen(false);
  };

  const updateNote = async () => {
    console.log(EditItemId);
    if (forminput === "" || formtextArea == "") {
      alert("please fill the data in inputs");
    } else {
      try {
        const noteObj = {
          title: forminput,
          content: formtextArea,
          color: listColor,
          date: new Date().toLocaleDateString(),
          tag: tagState,
          priority: priorityState,
          label: labelinput,
        };
        const { data } = await axios.put(
          `https://my-json-server.typicode.com/mariyasada/jsonAPI/notes/${EditItemId}`,
          noteObj
        );
        console.log(data, "updated data");
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
        setFormInput("");
        setFormTextArea("");
        setisOpen(false);
        setEditing(!isEditing);
        setListColor("");
        setlabelInput("");
        setExpand(false);
      } catch (err) {
        console.error("something went wrong", err);
      }
    }
  };
  const handleInputChange = (e) => {
    setFormTextArea(e);
    console.log(formtextArea);
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
        style={{ backgroundColor: listColor }}
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
            value={forminput}
            onChange={(e) => setFormInput(e.target.value)}
            onClick={() => setExpand(true)}
            required
          />
          {/* <FaBold /> */}
        </div>
        {/* <textarea
          type="text"
          placeholder="Text Here"
          className={
            theme === "light"
              ? "details-of-note border-outline-none details-of-note-dark"
              : "details-of-note border-outline-none"
          }
          name="content"
          value={formtextArea}
          onChange={(e) => setFormTextArea(e.target.value)}
          required
        /> */}
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
          <div className="priorityioption-container flex-center">
            <label htmlFor="priority" className="text-size-sm">
              Priority:
            </label>
            <select
              className="priority"
              onChange={(e) => setPriorityState(e.target.value)}
              value={priorityState}
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
                className="label-input"
                value={labelinput}
                onChange={(e) => setlabelInput(e.target.value)}
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
          listColor={listColor}
          setListColor={setListColor}
        />
      )}
    </div>
  );
};
