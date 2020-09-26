import React, { useState } from "react";
import Author from "./Author";
import "./Submit.css";
import { EVIDENCE_TYPES } from "../../common/Utils";
export default function ProceedingsForm() {
  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState([]);
  const [year, setYear] = useState(2020);
  const [month, setMonth] = useState("");
  return (
    <div>
      <label htmlFor={"title"} className={"field"}>
        Title:
      </label>
      <input type={"text"} id={"title"} className={"titleInput"} onChange={(e) => {
        setTitle(e.target.value);
      }}></input>
      <label htmlFor={"authors"}>
        <b>Authors:</b>
      </label>
      <div id={"authors"}>
        {authors.map((author, key) => {
          return (
            <React.Fragment>
              <Author author={author} key={key} authors={authors} />
            </React.Fragment>
          );
        })}
        <button
          className={"addAuthorButton"}
          type={"text"}
          onClick={() => {
            var newAuthors = [];
            authors.forEach((element) => {
              newAuthors.push(element);
            });
            newAuthors.push("New Author");
            setAuthors(newAuthors);
            console.log(authors);
          }}
        >
          Add Author
        </button>
        <div>
          <label htmlFor={"year"}>Year:</label>
          <input
            type={"number"}
            id={"year"}
            className={"titleInput"}
            onChange={(e) => {
              setYear(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor={"month"}>Month:</label>
          <input
            type={"text"}
            id={"month"}
            className={"titleInput"}
            onChange={(e) => {
              setMonth(e.target.value);
            }}
          ></input>
        </div>
        <button
          className={"submit"}
          onClick={() => {
            submitProceedings();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );

  function submitProceedings() {
    var jsonData = 
    {
      "type" : EVIDENCE_TYPES[1].name,
      "title" : title,
      "authors" : authors,
      "year" : year,
      "month" : month
    };
    fetch("/api/submit/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(jsonData),
    })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (res) {
        console.log(res);
      });
  }
}
