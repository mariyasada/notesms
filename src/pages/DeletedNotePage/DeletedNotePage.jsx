import React from "react";
import { ArchiveCard, Sidebar, Navbar } from "../../Component";
import "../../Component/Sidebar/Sidebar.css";
import "./DeletedNotepage.css";

export const DeletedNotePage = () => {
  return (
    <div className="Deletenote-page-container flex-center">
      <Navbar />
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="Delete-heading-note-container flex-center flex-direction-column">
        <h2 className="text-size-md heading-delete">Deleted Notes</h2>
        <div className="Deletenotes-container flex-center">
          <ArchiveCard />
          <ArchiveCard />
          <ArchiveCard />
        </div>
      </div>
    </div>
  );
};
