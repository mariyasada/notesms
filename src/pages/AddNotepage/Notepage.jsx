import React from "react";
import { Navbar, NoteListPage, Sidebar } from "../../Component";
import "./Notepage.css";

export const NotePage = () => {
  return (
    <div className="note-page-container flex-center flex-direction-column">
      <Navbar />
      <div className="sidebar-and-notes-container flex-center">
        <Sidebar />
        <NoteListPage />
      </div>
    </div>
  );
};
