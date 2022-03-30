import React, { useState } from "react";
import { BiArchiveIn, BiTrash, BiEdit } from "react-icons/bi";
import { BsPinFill, BsPin } from "react-icons/bs";
import { useArchiveNote } from "../../Context/archive-note-context";
import { useNotes } from "../../Context/note-context";
import "./NoteCard.css";

export const NoteCard = ({
  Note,
  pinnedNotes,
  setPinnedNotes,
  forminput,
  setFormInput,
  formtextArea,
  setFormTextArea,
  listColor,
  setListColor,
  tagState,
  setTagState,
  setEditItemId,
}) => {
  const [isPinned, setIsPinned] = useState(false);
  const { isEditing, setEditing, allNotes, setallNotes } = useNotes();
  const { archiveState, archiveDispatch, trashListState, trashListDispatch } =
    useArchiveNote();

  const addPinnedNote = (note) => {
    console.log(note, "from pinnednotes");
    setIsPinned(!isPinned);
    setPinnedNotes((prevdata) => [...prevdata, note]);
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
    setEditing(!isEditing);
    setEditItemId(note.id);
  };

  const ArchiveHandler = (Note) => {
    archiveDispatch({ type: "ADD_TO_ARCHIVE", payload: Note });
    const newItem = allNotes.filter((item) => item.id !== Note.id);
    setallNotes(newItem);
  };

  const removefromNotesAddToTrash = (Note) => {
    trashListDispatch({ type: "ADD_TO_TRASH", payload: Note });
    const newItemofNotes = allNotes.filter((item) => item.id !== Note.id);
    setallNotes(newItemofNotes);
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
        <p className="description-of-notes">{Note.content}</p>
      </div>
      <div className="tag-of-notes-container flex-center">
        <div className="tag-of-card">{Note.tag}</div>
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
    </div>
  );
};
