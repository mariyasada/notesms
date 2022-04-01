import React from "react";
import "../NoteCard/NoteCard.css";
import { FaTrashRestoreAlt } from "react-icons/fa";
import { BiTrash } from "react-icons/bi";
import { useArchiveNote } from "../../Context/archive-note-context";
import { useNotes } from "../../Context/note-context";

export const DeleteCard = ({ Note }) => {
  const { archiveState, archiveDispatch, trashListState, trashListDispatch } =
    useArchiveNote();
  const { allNotes, setallNotes } = useNotes();

  const RestoreNotesFromTrash = (Note) => {
    trashListDispatch({ type: "REMOVE_FROM_TRASH", payload: Note });
    setallNotes((prevdata) => [...prevdata, Note]);
  };

  return (
    <div
      className="notecard-container flex-center flex-direction-column border-round"
      style={{ backgroundColor: Note.color }}
    >
      <div className="title-of-notes-container flex-center">
        <p className="title-card">{Note.title}</p>
      </div>
      <div className="description-of-notes-container flex-center">
        <p className="description-of-notes">{Note.content}</p>
      </div>
      <div className="tag-of-notes-container flex-center">
        <div className="tag-of-card">{Note.tag}</div>
        <div className="priority-of-card">{Note.priority}</div>
      </div>
      <div className="time-date-and-icon-container flex-center">
        <p className="time-and-date-div"> Created on {Note.date}</p>
        <div className="icons-of-notes-container flex-center">
          <FaTrashRestoreAlt
            title="restore"
            className="notes-icon-notecard"
            onClick={() => RestoreNotesFromTrash(Note)}
          />
          <BiTrash
            title="Delete"
            className="notes-icon-notecard"
            onClick={() =>
              trashListDispatch({ type: "REMOVE_FROM_TRASH", payload: Note })
            }
          />
        </div>
      </div>
    </div>
  );
};
