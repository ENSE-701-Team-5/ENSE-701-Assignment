import React, { useState } from "react";
import Author from "./Author";
export default function Book() {
  const [title, setTitle] = useState("");
  const [authors, setAuthor] = useState(["Kearney"]);
  return (
    <div>
      <label htmlFor={"title"} className={"field"}>
        Title:
      </label>
      <input type={"text"} id={"title"}></input>
      <label htmlFor={"authors"} className={"field"}>
        Authors:
      </label>
      <span id={"authors"}>
        {authors.map((author, key) => {
          return (
            <React.Fragment>
              <Author author={author} key={key} />
            </React.Fragment>
          );
        })}
        <button type={"text"} onClick={() =>{
          setAuthor(authors.push("New Author"))
        }}>Add Author</button>
      </span>
    </div>
  );
}
