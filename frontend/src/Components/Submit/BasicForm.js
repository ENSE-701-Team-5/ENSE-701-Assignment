import React, { useState } from "react";
import Author from "./Author";
import "./Submit.css";
import { readFile } from "../../common/Utils";
export default function BasicForm(props) {
  const [evidenceData, setEvidenceData] = useState(props.evidenceData);
  return (
    <div>
      <label htmlFor={"title"}>
        Title:
      </label>
      <input
        type={"text"}
        id={"title"}
        className={"titleInput"}
        value={evidenceData.title}
        onChange={(e) => {
              var newData = evidenceData;
              newData.title = e.target.value;
              setEvidenceData(newData);
        }}
      ></input>
      <label htmlFor={"authors"}>
        <b>Authors:</b>
      </label>
      <div id={"authors"}>
        {evidenceData.authors.map((author, key) => {
          return (
            <React.Fragment key={key}>
              <Author author={author} index={key} evidenceData={evidenceData}/>
            </React.Fragment>
          );
        })}
        <button
          className={"addAuthorButton"}
          type={"text"}
          onClick={() => {
            var newAuthors = [];
            evidenceData.authors.forEach((element) => {
              newAuthors.push(element);
            });
            newAuthors.push("New Author");
            var newData = evidenceData;
            newData.authors = newAuthors;
            console.log(newData.authors)
            setEvidenceData(newData);
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
            value={evidenceData.year}
            onChange={(e) => {
              var newData = evidenceData;
              newData.year = e.target.value;
              setEvidenceData(newData);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor={"month"}>Month:</label>
          <input
            type={"text"}
            id={"month"}
            className={"titleInput"}
            value={evidenceData.month}
            onChange={(e) => {
              var newData = evidenceData;
              newData.month = e.target.value;
              setEvidenceData(newData);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor={"doi"}>DOI:</label>
          <input
            type={"text"}
            id={"doi"}
            className={"titleInput"}
            value={evidenceData.doi}
            onChange={(e) => {
              var newData = evidenceData;
              newData.doi = e.target.value;
              setEvidenceData(newData);
            }}
          ></input>
        </div>
        <label htmlFor="file">Upload File</label>
        <input
          type="file"
          id="file"
          name="file"
          required
          onChange={(e) => {
            readFile(e);
          }}
        ></input>
      </div>
    </div>
  );
}
