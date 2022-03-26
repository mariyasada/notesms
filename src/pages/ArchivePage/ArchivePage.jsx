import React from "react";
import { ArchiveCard, Sidebar, Navbar } from "../../Component";
import "./Archivepage.css";
import "../../Component/Sidebar/Sidebar.css";

export const ArchivePage = () => {
  return (
    <div className="Archivenote-page-container flex-center">
      <Navbar />
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="archive-heading-note-container flex-center flex-direction-column">
        <h2 className="text-size-md heading-archive">Archive Notes</h2>
        <div className="archivenotes-container flex-center">
          <ArchiveCard />
          <ArchiveCard />
          <ArchiveCard />
        </div>
      </div>
    </div>
  );
};
