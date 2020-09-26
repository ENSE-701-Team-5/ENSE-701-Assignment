import React, { useState } from "react";
import "./Submit.css";
export default function Author(props) {
  const [author, setAuthor] = useState(props.author);
  const [authors, setAuthors] = useState(props.authors);
  return (
    <div>
      <label htmlFor={author}>Author: </label>
      <input
        type={"text"}
        className={"authorInput"}
        id={author}
        onChange={(e) => {
          changeAuthor(e.target.value);
        }}
      ></input>
      <button className={"removeButton"} onClick={(e) => {}}>
        Remove
      </button>
    </div>
  );

  function changeAuthor(value) {
    var array = authors;
    var index = array.indexOf(author);
    setAuthor(value);
    array[index] = value;
    setAuthors(array);
  }
}
