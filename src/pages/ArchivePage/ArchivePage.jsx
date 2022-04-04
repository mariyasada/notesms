import React from "react";
import { ArchiveCard, Sidebar, Navbar } from "../../Component";
import "./Archivepage.css";
import "../../Component/Sidebar/Sidebar.css";
import { useArchiveNote } from "../../Context/archive-note-context";
import { useTheme } from "../../Context/theme-context";

export const ArchivePage = () => {
  const { archiveState, archiveDispatch } = useArchiveNote();
  const { ArChiveList } = archiveState;
  const { theme, setTheme } = useTheme();
  return (
    <div
      className={
        theme === "light"
          ? "Archivenote-page-container flex-center Archivenote-page-container-dark"
          : "Archivenote-page-container flex-center"
      }
    >
      {/* <Navbar /> */}
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="archive-heading-note-container flex-center flex-direction-column">
        <h2 className="text-size-md heading-archive">Archive Notes</h2>
        <div className="archivenotes-container flex-center">
          {ArChiveList.map((note) => {
            return <ArchiveCard Note={note} />;
          })}
        </div>
      </div>
    </div>
  );
};
