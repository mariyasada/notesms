import React, { useState } from "react";
import {
  Navbar,
  NoteCard,
  NoteListPage,
  Sidebar,
  PinnedCard,
  FilterBar,
} from "../../Component";
import { initialDataOfNote } from "../../Component/constants/note-constants";
import { useNotes } from "../../Context/note-context";
import { useTheme } from "../../Context/theme-context";
import "./Notepage.css";

export const NotePage = () => {
  const { pinnedNotes, setEditItemId, filterData } = useNotes();
  const { theme, setTheme } = useTheme();
  const [isOpen, setisOpen] = useState(false);
  const [formtextArea, setFormTextArea] = useState("");
  const [noteData, setNoteData] = useState(initialDataOfNote);

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
          formtextArea={formtextArea}
          setFormTextArea={setFormTextArea}
          noteData={noteData}
          setNoteData={setNoteData}
        />
      </div>
      <div className="title-notelist-container flex-center flex-direction-column">
        <h2
          className={
            theme === "light"
              ? "text-size-md heading-others flex-center heading-dark"
              : "text-size-md heading-others flex-center"
          }
        >
          OTHERS
        </h2>
        <div className="notelist-container flex-center">
          {filterData.map((note) => {
            return (
              <NoteCard
                Note={note}
                key={note.id}
                setFormTextArea={setFormTextArea}
                setEditItemId={setEditItemId}
                setNoteData={setNoteData}
              />
            );
          })}
        </div>
      </div>
      <div className="title-pinned-notelist-container flex-center flex-direction-column">
        <h2
          className={
            theme === "light"
              ? "text-size-md heading-Pinned flex-center heading-dark"
              : "text-size-md heading-Pinned flex-center"
          }
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
