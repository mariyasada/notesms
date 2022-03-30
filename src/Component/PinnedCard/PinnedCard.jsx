import React from "react";
import { BiArchiveIn, BiTrash, BiEdit } from "react-icons/bi";
import { BsPinFill, BsPin } from "react-icons/bs";
import "../NoteCard/NoteCard.css";

export const PinnedCard = ({ Note }) => {
  return (
    <div
      className="notecard-container flex-center flex-direction-column border-round"
      style={{ backgroundColor: Note.color }}
    >
      <div className="title-of-notes-container flex-center">
        <p className="title-card">{Note.title}</p>
        <BsPinFill
          className="notes-icon-notecard"
          onClick={() => removePinnedNotes(Note)}
        />
      </div>
      <div className="description-of-notes-container flex-center">
        <p className="description-of-notes">{Note.content}</p>
      </div>
      <div className="tag-of-notes-container flex-center">
        <div className="tag-of-card">{Note.tag}</div>
      </div>
      <div className="time-date-and-icon-container flex-center">
        <p className="time-and-date-div"> Created on {Note.date}</p>
        <div className="icons-of-notes-container flex-center">
          <BiEdit title="edit" className="notes-icon-notecard" />
          <BiArchiveIn title="archive" className="notes-icon-notecard" />
          <BiTrash title="Delete" className="notes-icon-notecard" />
        </div>
      </div>
    </div>
  );
};
