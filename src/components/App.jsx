import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(noteTitle, noteContent) {
    // console.log("clicked");
    // console.log(noteContent);
    // console.log(noteTitle);
    setNotes((prevItems) => {
      return [...prevItems, { title: noteTitle, content: noteContent }];
    });
    console.log(notes);
  }

  function deleteItem(id) {
    setNotes((notes) => {
      return notes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            delete={deleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
