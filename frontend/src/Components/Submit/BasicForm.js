import React from "react";
import Author from "./Author";
import "./Submit.css";
import { readFile } from "../../common/Utils";
export default function BasicForm(props) {
  return (
    <div>
      <label htmlFor={"title"}>Title:</label>
      <input
        type={"text"}
        id={"title"}
        className={"titleInput"}
        value={props.author}
        onChange={(e) => {
          console.log(e.target.value);
          var newData = props.evidenceData;
          newData.title = e.target.value;
          console.log(newData);
          props.setEvidenceData(newData);
        }}
      ></input>
      <label htmlFor={"authors"}>
        <b>Authors:</b>
      </label>
      <div id={"authors"}>
        {props.evidenceData.authors.map((author, key) => {
          return (
            <React.Fragment key={key}>
              <Author
                author={author}
                index={key}
                evidenceData={props.evidenceData}
                setEvidenceData={props.setEvidenceData}
              />
            </React.Fragment>
          );
        })}
        <button
          className={"addAuthorButton"}
          type={"text"}
          onClick={() => {
            var newData = props.evidenceData;
            var newAuthors = [];
            props.evidenceData.authors.forEach((element) => {
              newAuthors.push(element);
            });
            newAuthors.push("");
            newData.authors = newAuthors;
            props.setEvidenceData({ ...newData });
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
            value={props.evidenceData.year}
            onChange={(e) => {
              var newData = props.evidenceData;
              newData.year = e.target.value;
              props.setEvidenceData({ ...newData });
            }}
          ></input>
        </div>
        <div>
          <label htmlFor={"month"}>Month:</label>
          <input
            type={"text"}
            id={"month"}
            className={"titleInput"}
            value={props.evidenceData.month}
            onChange={(e) => {
              var newData = props.evidenceData;
              newData.month = e.target.value;
              props.setEvidenceData({ ...newData });
            }}
          ></input>
        </div>
        <div>
          <label htmlFor={"doi"}>DOI:</label>
          <input
            type={"text"}
            id={"doi"}
            className={"titleInput"}
            value={props.evidenceData.doi}
            onChange={(e) => {
              var newData = props.evidenceData;
              newData.doi = e.target.value;
              props.setEvidenceData({ ...newData });
            }}
          ></input>
        </div>
        <label htmlFor="file">Upload File</label>
        <input
          type="file"
          id="file"
          name="file"
          required
          onChange={async (e) => {
            var file = await readFile(e);
            var newData = props.evidenceData;
            if (file !== undefined) {
              newData.file = { data: file[0], extension: file[1] };
              props.setEvidenceData(newData);
            }
          }}
        ></input>
      </div>
    </div>
  );
}
