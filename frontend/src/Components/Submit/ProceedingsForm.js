import React from "react";
import "./Submit.css";
import BasicForm from "./BasicForm";
export default function ProceedingsForm(props) {
  return (
    <div>
      <BasicForm evidenceData={props.evidenceData} setEvidenceData={props.setEvidenceData}/>
      <label htmlFor={"publisher"}>Publisher:</label>
        <input
          type={"text"}
          id={"publisher"}
          className={"titleInput"}
          value={props.evidenceData.publisher}
          onChange={(e) => {
            var newData = props.evidenceData;
            newData.publisher = e.target.value;
            props.setEvidenceData(newData);
          }}
        ></input>
    </div>
  );
}
