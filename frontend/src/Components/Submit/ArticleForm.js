import React, { useState } from "react";
import "./Submit.css";
import BasicForm from "./BasicForm";
export default function EvidenceForm(props) {
  const [evidenceData, setEvidenceData] = useState(props.evidenceData);
  return (
    <div>
      <BasicForm evidenceData={evidenceData} />
      <div>
        <label htmlFor={"journal"}>Journal:</label>
        <input
          type={"text"}
          id={"journal"}
          className={"titleInput"}
          value={evidenceData.journal}
          onChange={(e) => {
            var newData = evidenceData;
            newData.journal = e.target.value;
            setEvidenceData(newData);
          }}
        ></input>
      </div>
      <div>
        <label htmlFor={"volume"}>Volume:</label>
        <input
          type={"number"}
          id={"volume"}
          className={"titleInput"}
          value={evidenceData.volume}
          onChange={(e) => {
            var newData = evidenceData;
            newData.volume = e.target.value;
            setEvidenceData(newData);
          }}
        ></input>
      </div>
      <div>
        <label htmlFor={"number"}>Number:</label>
        <input
          type={"number"}
          id={"number"}
          className={"titleInput"}
          value={evidenceData.number}
          onChange={(e) => {
            var newData = evidenceData;
            newData.number = e.target.value;
            setEvidenceData(newData);
          }}
        ></input>
      </div>
      <div>
        <label htmlFor={"pages"}>Pages:</label>
        <input
          type={"text"}
          id={"pages"}
          className={"titleInput"}
          value={evidenceData.pages}
          onChange={(e) => {
            var newData = evidenceData;
            newData.pages = e.target.value;
            setEvidenceData(newData);
          }}
        ></input>
      </div>
      <button
        className={"submit"}
        onClick={() => {
          //submitArticle();
          console.log(evidenceData);
        }}
      >
        Submit
      </button>
    </div>
  );
}
