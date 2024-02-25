import React from "react";
import AddIcon from '@mui/icons-material/Add';



function CreateArea({ onAdd }) {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }
  function handleContentChange(event) {
    setContent(event.target.value);
  }
  function handleAddNote(event) {
    event.preventDefault();
    if (title.trim && content.trim) {
      onAdd({ title, content });
      setTitle("");
      setContent("");
    }
  }
  return (
    <div>
      <form>
        <input
          onChange={handleTitleChange}
          name="title"
          placeholder="Title"
          value={title}
        />
        <textarea
          onChange={handleContentChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content}
        />
        <button onClick={handleAddNote}>
        <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
