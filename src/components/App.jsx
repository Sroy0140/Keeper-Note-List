import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  var [notes, setNotes] = React.useState([]);

  // const handleAdd = () => {
  //   pushnotes([...notes, { title: note.title, content: note.content }]);
  //   setnote('');
  // };
  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  function handleDeleteNote(noteToDelete) {
    setNotes(notes.filter((note) => note !== noteToDelete));
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={handleAddNote} />
      {notes.map((note, index) => (
        <Note key={index} note={note} onDelete={handleDeleteNote} />
      ))}

      <Footer />
    </div>
  );
}

export default App;
