import React from "react";
import { Navbar, NoteCard, NoteListPage, Sidebar } from "../../Component";
import { useNotes } from "../../Context/note-context";
import "./Notepage.css";

export const NotePage = () => {
  const { allNotes, setallNotes } = useNotes();
  console.log(allNotes, "from notepage");
  return (
    <div className="note-page-container flex-center flex-direction-column">
      <Navbar />
      <div className="sidebar-and-notes-container flex-center">
        <Sidebar />
        <NoteListPage />
      </div>
      <div className="title-notelist-container flex-center flex-direction-column">
        <h2 className="text-size-md heading-others flex-center"> OTHERS</h2>
        <div className="notelist-container flex-center">
          {console.log(allNotes, "all notessss")}
          {allNotes.map((note) => {
            return <NoteCard Note={note} key={note.id} />;
          })}
        </div>
      </div>
      <div className="title-pinned-notelist-container flex-center flex-direction-column">
        <h2 className="text-size-md heading-Pinned flex-center"> PINNED</h2>
        <div className="notelist-container flex-center">
          {/* <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard /> */}
        </div>
      </div>
    </div>
  );
};
