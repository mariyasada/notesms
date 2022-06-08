import React from "react";
import { BsTrash } from "react-icons/bs";
import { useNotes } from "../../Context/note-context";
import "../NoteCard/NoteCard.css";
import toast from "react-hot-toast";

export const PinnedCard = ({ Note }) => {
  const { pinnedNotes, setPinnedNotes, removefrompinnedNotes } = useNotes();
  return (
    <div
      className="notecard-container-for-archive flex-center flex-direction-column border-round"
      style={{ backgroundColor: Note.color }}
    >
      <div className="title-of-notes-container-archive flex-center">
        <p className="title-card">{Note.title}</p>
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
        <div className="icons-of-notes-container flex-center">
          <BsTrash
            title="Delete"
            className="notes-icon-notecard"
            onClick={() => {
              removefrompinnedNotes(Note),
                toast("Removed from Pinned Notes", { icon: "✔" });
            }}
          />
        </div>
      </div>
    </div>
  );
};
