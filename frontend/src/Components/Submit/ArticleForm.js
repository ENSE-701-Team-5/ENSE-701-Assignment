import React, { useState } from "react";
import Author from "./Author";
import "./Submit.css";
import { EVIDENCE_TYPES } from "../../common/Utils";
export default function EvidenceForm() {
  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState(["Kearney"]);
  const [year, setYear] = useState(2020);
  const [month, setMonth] = useState("December");
  const [doi, setDoi] = useState("");
  const [journal, setJournal] = useState("");
  const [volume, setVolume] = useState(0);
  const [number, setNumber] = useState(0);
  const [pages, setPages] = useState("");
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
        <div>
          <label htmlFor={"doi"}>DOI:</label>
          <input
            type={"text"}
            id={"doi"}
            className={"titleInput"}
            onChange={(e) => {
              setDoi(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor={"journal"}>Journal:</label>
          <input
            type={"text"}
            id={"journal"}
            className={"titleInput"}
            onChange={(e) => {
              setJournal(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor={"volume"}>Volume:</label>
          <input
            type={"number"}
            id={"volume"}
            className={"titleInput"}
            onChange={(e) => {
              setVolume(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor={"number"}>Number:</label>
          <input
            type={"number"}
            id={"number"}
            className={"titleInput"}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor={"pages"}>Pages:</label>
          <input
            type={"text"}
            id={"pages"}
            className={"titleInput"}
            onChange={(e) => {
              setPages(e.target.value);
            }}
          ></input>
        </div>
        <button
          className={"submit"}
          onClick={() => {
            submitArticle();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );

  function submitArticle() {
    var jsonData = 
    {
      "type" : EVIDENCE_TYPES[0].name,
      "title" : title,
      "authors" : authors,
      "year" : year,
      "month" : month,
      "doi" : doi,
      "journal" : journal,
      "volume" : volume,
      "pages" : pages
    };
    console.log(jsonData)
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
