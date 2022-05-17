import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleTitle(event) {
    setTitle(event.target.value);
    console.log(title);
  }

  function handleContent(event) {
    setContent(event.target.value);
    console.log(content);
  }

  function add(event) {
    props.addNote(title, content);
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleTitle}
          name="title"
          placeholder="Title"
          value={title}
        />

        <textarea
          onChange={handleContent}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content}
        />

        <button onClick={add}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
