import React from "react";
import { Button } from "react-bootstrap";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Note.css";

const Note = (props) => {
  const { title, content } = props;
  return (
    <div className="notes">
      <div >
        <h5 className= "border">{title}</h5>
        <p >{content}</p>
        <Button>
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </Button>
      </div>
      
    </div>
  );
};

export default Note;
