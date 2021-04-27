import "./App.css";
import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Body from "./Components/Body/Body";
import Note from "./Components/Note/Note";
import { useState } from "react";

function App() {
  const [addItems, setAddItems] = useState([]);
  const addNote = (note) => {
    setAddItems((prevData) => {
      return [...prevData, note];
    });
  };
  return (
    <>
      <div>
        <Header></Header>
        <Body addNote={addNote}></Body>
        {addItems.map((add) => {
          return <Note title={add.title} content={add.content}></Note>;
        })}
      </div>
    </>
  );
}

export default App;
