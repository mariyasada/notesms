import React from "react";
import { BsPinFill } from "react-icons/bs";
import "../NoteCard/NoteCard.css";

export const PinnedCard = ({ Note }) => {
  return (
    <div
      className="notecard-container flex-center flex-direction-column border-round"
      style={{ backgroundColor: Note.color }}
    >
      <div className="title-of-notes-container flex-center">
        <p className="title-card">{Note.title}</p>
        <BsPinFill className="notes-icon-notecard" />
      </div>
      <div className="description-of-notes-container flex-center">
        <p
          className="description-of-notes"
          dangerouslySetInnerHTML={{
            __html: Note.content,
          }}
        />
      </div>
      <div className="tag-of-notes-container flex-center">
        <div className="tag-of-card">{Note.tag}</div>
        <div className="priority-of-card">{Note.priority}</div>
        <div className="label-container">
          <div className="label-of-card">{Note.label}</div>
        </div>
      </div>
      <div className="time-date-and-icon-container flex-center">
        <p className="time-and-date-div"> Created on {Note.date}</p>
      </div>
    </div>
  );
};
