import React, { useState } from "react";
import { BiArchiveIn, BiTrash, BiEdit } from "react-icons/bi";
import { BsPinFill, BsPin } from "react-icons/bs";
import { useArchiveNote } from "../../Context/archive-note-context";
import { useNotes } from "../../Context/note-context";
import "./NoteCard.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export const NoteCard = ({
  Note,
  pinnedNotes,
  setPinnedNotes,
  setFormInput,
  setFormTextArea,
  setListColor,
  setTagState,
  setEditItemId,
  setPriorityState,
}) => {
  const [isPinned, setIsPinned] = useState(false);
  const { isEditing, setEditing, allNotes, setallNotes } = useNotes();
  const { archiveState, archiveDispatch, trashListState, trashListDispatch } =
    useArchiveNote();

  console.log(Note.content, "content");

  const addPinnedNote = (note) => {
    const newItem = pinnedNotes.find((item) => item.id === note.id);
    console.log(newItem, "true");
    if (newItem) {
      console.log("note already pinned");
    } else {
      setIsPinned(!isPinned);
      setPinnedNotes((prevdata) => [...prevdata, note]);
    }
  };

  const removePinnedNotes = (note) => {
    const newpinnedNote = pinnedNotes.filter(
      (pinnedNote) => pinnedNote.id !== note.id
    );
    setPinnedNotes(newpinnedNote);
    setIsPinned(!isPinned);
  };

  const EditNoteHandler = (note) => {
    console.log("clicked", note);
    setFormInput(note.title);
    setFormTextArea(note.content);
    setListColor(note.color);
    setTagState(note.tag);
    setPriorityState(note.priority);
    setEditing(!isEditing);
    setEditItemId(note.id);
  };

  const ArchiveHandler = (Note) => {
    archiveDispatch({ type: "ADD_TO_ARCHIVE", payload: Note });
    const newItem = allNotes.filter((item) => item.id !== Note.id);
    setallNotes(newItem);
    notify();
    removePinnedNotes(Note);
  };

  const removefromNotesAddToTrash = (Note) => {
    trashListDispatch({ type: "ADD_TO_TRASH", payload: Note });
    const newItemofNotes = allNotes.filter((item) => item.id !== Note.id);
    setallNotes(newItemofNotes);
    removePinnedNotes(Note);
  };

  const notify = () => {
    toast.dark("Note Archived,go to archived page");
  };
  return (
    <div
      className="notecard-container flex-center flex-direction-column border-round"
      style={{ backgroundColor: Note.color }}
    >
      <div className="title-of-notes-container flex-center">
        <p className="title-card">{Note.title}</p>
        {isPinned ? (
          <BsPinFill
            className="notes-icon-notecard"
            onClick={() => removePinnedNotes(Note)}
          />
        ) : (
          <BsPin onClick={() => addPinnedNote(Note)} />
        )}
      </div>
      <div className="description-of-notes-container flex-center">
        <div
          className="description-of-notes"
          dangerouslySetInnerHTML={{
            __html: Note.content,
          }}
        />
      </div>
      <div className="tag-of-notes-container flex-center">
        {Note.tag === undefined && Note.tag === "" ? (
          <div className="priority-of-card">class</div>
        ) : (
          <div className="tag-of-card">{Note.tag}</div>
        )}

        {Note.priority === undefined && Note.priority === "" ? (
          <div className="priority-of-card">Low</div>
        ) : (
          <div className="priority-of-card">{Note.priority}</div>
        )}

        <div className="label-container">
          <div className="label-of-card">{Note.label}</div>
        </div>
      </div>
      <div className="time-date-and-icon-container flex-center">
        <p className="time-and-date-div"> Created on {Note.date}</p>

        <div className="icons-of-notes-container flex-center">
          <BiEdit
            title="edit"
            className="notes-icon-notecard"
            onClick={() => EditNoteHandler(Note)}
          />
          <BiArchiveIn
            title="archive"
            className="notes-icon-notecard"
            onClick={() => ArchiveHandler(Note)}
          />
          <BiTrash
            title="Delete"
            className="notes-icon-notecard"
            onClick={() => removefromNotesAddToTrash(Note)}
          />
        </div>
      </div>
      <ToastContainer autoClose={5000} />
    </div>
  );
};
