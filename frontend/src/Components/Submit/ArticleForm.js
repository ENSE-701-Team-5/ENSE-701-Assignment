import React from "react";
import "./Submit.css";
import BasicForm from "./BasicForm";
export default function EvidenceForm(props) {
  return (
    <div>
      <BasicForm
        evidenceData={props.evidenceData}
        setEvidenceData={props.setEvidenceData}
      />
      <div className={"row"}>
        <div className={"col-25"}>
          <label htmlFor={"journal"}>
            <h4>Journal:</h4>
          </label>
        </div>
        <div className={"col-75"}>
          <input
            type={"text"}
            id={"journal"}
            className={"titleInput"}
            defaultValue={props.evidenceData.journal}
            onChange={(e) => {
              var newData = props.evidenceData;
              newData.journal = e.target.value;
              props.setEvidenceData(newData);
            }}
          ></input>
        </div>
      </div>
      <div className={"row"}>
        <div className={"col-25"}>
          <label htmlFor={"volume"}>
            <h4>Volume</h4>:
          </label>
        </div>
        <div className={"col-75"}>
          <input
            type={"number"}
            id={"volume"}
            className={"titleInput"}
            defaultValue={props.evidenceData.volume}
            onChange={(e) => {
              var newData = props.evidenceData;
              newData.volume = e.target.value;
              props.setEvidenceData(newData);
            }}
          ></input>
        </div>
      </div>
      <div className={"row"}>
        <div className={"col-25"}>
          <label htmlFor={"number"}>
            <h4>Number:</h4>
          </label>
        </div>
        <div className={"col-75"}>
          <input
            type={"number"}
            id={"number"}
            className={"titleInput"}
            defaultValue={props.evidenceData.number}
            onChange={(e) => {
              var newData = props.evidenceData;
              newData.number = e.target.value;
              props.setEvidenceData(newData);
            }}
          ></input>
        </div>
      </div>
      <div className={"row"}>
        <div className={"col-25"}>
          <label htmlFor={"pages"}>
            <h4>Pages:</h4>
          </label>
        </div>
        <div className={"col-75"}>
          <input
            type={"text"}
            id={"pages"}
            className={"titleInput"}
            defaultValue={props.evidenceData.pages}
            onChange={(e) => {
              var newData = props.evidenceData;
              newData.pages = e.target.value;
              props.setEvidenceData(newData);
            }}
          ></input>
        </div>
      </div>
    </div>
  );
}
