import React, { useState } from "react";
import {
  Navbar,
  NoteCard,
  NoteListPage,
  Sidebar,
  PinnedCard,
  FilterBar,
} from "../../Component";
import { useNotes } from "../../Context/note-context";
import { useTheme } from "../../Context/theme-context";
import "./Notepage.css";

export const NotePage = () => {
  const {
    allNotes,
    setallNotes,
    pinnedNotes,
    setPinnedNotes,
    EditItemId,
    setEditItemId,
    filterData,
    isEditing,
    setEditing,
  } = useNotes();
  const { theme, setTheme } = useTheme();
  const [isOpen, setisOpen] = useState(false);
  const [forminput, setFormInput] = useState("");
  const [formtextArea, setFormTextArea] = useState("");
  const [listColor, setListColor] = useState("");
  const [tagState, setTagState] = useState("class");
  const [priorityState, setPriorityState] = useState("Low");
  const [labelinput, setlabelInput] = useState("");

  return (
    <div
      className="note-page-container flex-center flex-direction-column"
      style={{ backgroundColor: theme === "light" ? "#202020" : "white" }}
    >
      <div className="sidebar-and-notes-container flex-center">
        <Sidebar />

        <NoteListPage
          isOpen={isOpen}
          setisOpen={setisOpen}
          forminput={forminput}
          setFormInput={setFormInput}
          formtextArea={formtextArea}
          setFormTextArea={setFormTextArea}
          listColor={listColor}
          setListColor={setListColor}
          tagState={tagState}
          setTagState={setTagState}
          EditItemId={EditItemId}
          setEditItemId={setEditItemId}
          priorityState={priorityState}
          setPriorityState={setPriorityState}
          pinnedNotes={pinnedNotes}
          setPinnedNotes={setPinnedNotes}
          labelinput={labelinput}
          setlabelInput={setlabelInput}
        />
      </div>
      <div className="title-notelist-container flex-center flex-direction-column">
        <h2
          className="text-size-md heading-others flex-center"
          style={{ color: theme === "light" ? "white" : "" }}
        >
          OTHERS
        </h2>
        <div className="notelist-container flex-center">
          {filterData.map((note) => {
            return (
              <NoteCard
                Note={note}
                key={note.id}
                pinnedNotes={pinnedNotes}
                setPinnedNotes={setPinnedNotes}
                setFormInput={setFormInput}
                setFormTextArea={setFormTextArea}
                setListColor={setListColor}
                setTagState={setTagState}
                setEditItemId={setEditItemId}
                EditItemId={EditItemId}
                setPriorityState={setPriorityState}
                setlabelInput={setlabelInput}
              />
            );
          })}
        </div>
      </div>
      <div className="title-pinned-notelist-container flex-center flex-direction-column">
        <h2
          className="text-size-md heading-Pinned flex-center"
          style={{ color: theme === "light" ? "white" : "" }}
        >
          PINNED
        </h2>
        <div className="notelist-container flex-center">
          {pinnedNotes.map((note) => {
            return <PinnedCard key={note.id} Note={note} />;
          })}
        </div>
      </div>
    </div>
  );
};
