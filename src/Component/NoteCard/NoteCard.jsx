import React from "react";
import { BiArchiveIn, BiTrash, BiEdit } from "react-icons/bi";
import { BsPinFill } from "react-icons/bs";
import "./NoteCard.css";

export const NoteCard = () => {
  return (
    <div className="notecard-container flex-center flex-direction-column border-round">
      <div className="title-of-notes-container flex-center">
        <p className="title-card">Wanna go to holidays.</p>
        <BsPinFill className="notes-icon-notecard" />
      </div>
      <div className="description-of-notes-container">
        <p className="description-of-notes">
          Wanna go to kashmir,manali.gjhgjhbhgv Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Ipsa molestias ad eum nobis ab placeat
          provident ipsam ex inventore sit ducimus, libero officia suscipit rem
          alias cupiditate laborum porro dolorem.
        </p>
      </div>
      <div className="icons-of-notes-container flex-center">
        <BiEdit title="edit" className="notes-icon-notecard" />
        <BiArchiveIn title="archive" className="notes-icon-notecard" />
        <BiTrash title="Delete" className="notes-icon-notecard" />
      </div>
    </div>
  );
};
