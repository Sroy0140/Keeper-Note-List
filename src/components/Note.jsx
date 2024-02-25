import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note({ note, onDelete }) {
  const handleDeleteNote = () => {
    onDelete(note);
  };

  return (
    <div className="note">
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <button onClick={handleDeleteNote}>
        <DeleteIcon />
        </button>
    </div>
  );
}

export default Note;
