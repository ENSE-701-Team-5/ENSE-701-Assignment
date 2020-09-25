import React, { useState } from "react";
import Author from "./Author";
export default function EvidenceForm() {
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
      <div id={"authors"}>
        {authors.map((author, key) => {
          return (
            <React.Fragment>
              <Author author={author} key={key} />
            </React.Fragment>
          );
        })}
        <button
          type={"text"}
          onClick={() => {
            var newAuthors = [];
            authors.forEach(element => {
                newAuthors.push(element);
            });
            newAuthors.push("New Author")
            console.log(newAuthors)
            setAuthor(newAuthors);
          }}
        >
          Add Author
        </button>
      </div>
    </div>
  );
}
