import React from "react";
import "./Submit.css";
import BasicForm from "./BasicForm";
export default function ProceedingsForm(props) {
  return (
    <div>
      <BasicForm
        evidenceData={props.evidenceData}
        setEvidenceData={props.setEvidenceData}
      />
      <div className={"row"}>
        <div className={"col-25"}>
          <label htmlFor={"publisher"}>
            <h4>Publisher:</h4>
          </label>
        </div>
        <div className={"col-75"}>
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
      </div>
    </div>
  );
}
