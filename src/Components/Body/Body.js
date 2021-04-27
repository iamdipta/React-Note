import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./Body.css";

const Body = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    console.log(note);
  };
  const addEvent = () => {
    props.addNote(note);
    setNote({
      title: "",
      content: "",
    });
  };
  return (
    <div className="main-note container">
      <div>
        <h1>Notes</h1>
        <h3>Stay Connecting with Us</h3>
        <p>
          Please write title and write a note.Click the Plus Button to save your
          important notes.
        </p>
      </div>
      <form>
        <div>
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={InputEvent}
            placeholder="Title"
            autoComplete="off"
          ></input>
        </div>
        <div>
          <textarea
            rows=""
            column=""
            placeholder="Write a note..."
            name="content"
            value={note.content}
            onChange={InputEvent}
          ></textarea>
          <Button onClick={addEvent}>
            <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Body;
