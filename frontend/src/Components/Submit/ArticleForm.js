import React, { useState } from "react";
import Author from "./Author";
import "./Submit.css";
import { EVIDENCE_TYPES, submitEvidenceData } from "../../common/Utils";
export default function EvidenceForm() {
  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState([]);
  const [year, setYear] = useState(2020);
  const [month, setMonth] = useState("");
  const [doi, setDoi] = useState("");
  const [journal, setJournal] = useState("");
  const [volume, setVolume] = useState(0);
  const [number, setNumber] = useState(0);
  const [pages, setPages] = useState("");
  const [file, setFile] = useState(null);
  const [fileExtension, setFileExtension] = useState("");
  return (
    <div>
      <label htmlFor={"title"} className={"field"}>
        Title:
      </label>
      <input
        type={"text"}
        id={"title"}
        className={"titleInput"}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
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

        <label htmlFor="pdf">Upload File</label>
        <input
          type="file"
          id="file"
          name="file"
          required
          onChange={(e) => {
            readFile(e);
          }}
        ></input>
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

  async function readFile(e) {

    const file = e.target.files[0];
    if(file == null) return;
    var extenstion = file.name.substr(
      file.name.lastIndexOf(".") + 1,
      file.name.length
    );
    const reader = new FileReader();
    
    if (extenstion != "none") {
      var data = await new Promise((resolve, reject) => {
        reader.onload = (event) => {
          resolve(event.target.result);
        };

        reader.onerror = (err) => {
          reject(err);
        };

        if (extenstion == "pdf") {
          reader.readAsBinaryString(file);
        } else if (extenstion == "bib") {
          reader.readAsText(file);
        }

      }, console.log(file));
      setFile(data);
      setFileExtension(extenstion);
    } else {
      alert("Invalid file type! Either upload a bibtex or pdf file.")
    }
  }
  function submitArticle() {
    var jsonData = {
      type: EVIDENCE_TYPES[0].name,
      title: title,
      number: number,
      authors: authors,
      year: year,
      month: month,
      doi: doi,
      journal: journal,
      volume: volume,
      pages: pages,
      file: {
        data: file,
        contextType: fileExtension,
      },
      submittedDate: new Date()
    };
    console.log(jsonData);
    submitEvidenceData(jsonData);
  }
}
