import React, { useState } from "react";
import { BiArchiveIn, BiTrash, BiEdit } from "react-icons/bi";
import { BsPinFill, BsPin } from "react-icons/bs";
import { useArchiveNote } from "../../Context/archive-note-context";
import { useNotes } from "../../Context/note-context";
import "./NoteCard.css";
import toast from "react-hot-toast";

export const NoteCard = ({
  Note,
  setFormTextArea,
  setEditItemId,
  setNoteData,
}) => {
  const [isPinned, setIsPinned] = useState(false);
  const {
    isEditing,
    setEditing,
    allNotes,
    setallNotes,
    pinnedNotes,
    setPinnedNotes,
  } = useNotes();
  const { archiveState, archiveDispatch, trashListState, trashListDispatch } =
    useArchiveNote();

  const addPinnedNote = (note) => {
    const newItem = pinnedNotes.find((item) => item.id === note.id);
    if (newItem) {
      toast("note already pinned");
    } else {
      setIsPinned(!isPinned);
      setPinnedNotes((prevdata) => [...prevdata, note]);
      toast("added to pinned note", { icon: "✔" });
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
    setNoteData({ ...note });
    setFormTextArea(note.content);
    setEditing(!isEditing);
    setEditItemId(note.id);
  };

  const ArchiveHandler = (Note) => {
    archiveDispatch({ type: "ADD_TO_ARCHIVE", payload: Note });
    const newItem = allNotes.filter((item) => item.id !== Note.id);
    setallNotes(newItem);
    toast("successfully archived", { icon: "✔" });
    removePinnedNotes(Note);
  };

  const removefromNotesAddToTrash = (Note) => {
    trashListDispatch({ type: "ADD_TO_TRASH", payload: Note });
    const newItemofNotes = allNotes.filter((item) => item.id !== Note.id);
    setallNotes(newItemofNotes);
    toast("successfully note added to trash", { icon: "✔" });
    removePinnedNotes(Note);
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
    </div>
  );
};
