import React from "react";
import { ArchiveCard, Sidebar, Navbar, DeleteCard } from "../../Component";
import "../../Component/Sidebar/Sidebar.css";
import { useArchiveNote } from "../../Context/archive-note-context";
import "./DeletedNotepage.css";

export const DeletedNotePage = () => {
  const { trashListState, trashListDispatch } = useArchiveNote();
  const { TrashList } = trashListState;
  return (
    <div className="Deletenote-page-container flex-center">
      <Navbar />
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="Delete-heading-note-container flex-center flex-direction-column">
        <h2 className="text-size-md heading-delete">Deleted Notes</h2>
        <div className="Deletenotes-container flex-center">
          {TrashList.map((note) => {
            return <DeleteCard Note={note} key={note.id} />;
          })}
        </div>
      </div>
    </div>
  );
};
