import React from "react";
import Author from "./Author";
import "./Submit.css";
import { readFile } from "../../common/Utils";
export default function BasicForm(props) {
  return (
    <div>
      <div className={"row"}>
        <div className={"col-25"}>
          <label htmlFor={"title"}>
            <h4>Title:</h4>
          </label>
        </div>
        <div class="col-75">
          <input
            type={"text"}
            id={"title"}
            className={"titleInput"}
            onChange={(e) => {
              console.log(e.target.value);
              var newData = props.evidenceData;
              newData.title = e.target.value;
              console.log(newData);
              props.setEvidenceData(newData);
            }}
          ></input>
        </div>
      </div>
      <label htmlFor={"authors"}>
        <b>Authors:</b>
      </label>
      <div id={"authors"}>
        {props.evidenceData.authors.map((author, key) => {
          return (
            <div className={"row"} key={key}>
              <Author
                author={author}
                index={key}
                evidenceData={props.evidenceData}
                setEvidenceData={props.setEvidenceData}
              />
            </div>
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
        <div className={"row"}>
          <div className={"col-25"}>
            <label htmlFor={"year"}><h4>Year:</h4></label>
          </div>
          <div className={"col-75"}>
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
        </div>
        <div className={"row"}>
          <div className={"col-25"}>
            <label htmlFor={"month"}><h4>Month:</h4></label>
          </div>
          <div className={"col-75"}>
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
        </div>
        <div className={"row"}>
          <div className={"col-25"}>
            <label htmlFor={"doi"}><h4>DOI:</h4></label>
          </div>
          <div className={"col-75"}>
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
        </div>
        <div className={"row"}>
          <div className={"col-25"}>
        <label htmlFor="file"><h4>Upload File</h4></label>
        </div>
        <div className={"col-75"}>
        <input
          type="file"
          id="file"
          className={"custom-file-input"}
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
      </div>
    </div>
  );
}
