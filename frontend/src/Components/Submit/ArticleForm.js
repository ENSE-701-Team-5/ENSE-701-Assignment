import React, { useState } from "react";
import "./Submit.css";
import BasicForm from "./BasicForm";
export default function EvidenceForm(props) {
  return (
    <div>
      <BasicForm evidenceData={props.evidenceData} setEvidenceData={props.setEvidenceData}/>
      <div>
        <label htmlFor={"journal"}>Journal:</label>
        <input
          type={"text"}
          id={"journal"}
          className={"titleInput"}
          value={props.evidenceData.journal}
          onChange={(e) => {
            var newData = props.evidenceData;
            newData.journal = e.target.value;
            props.setEvidenceData(newData);
          }}
        ></input>
      </div>
      <div>
        <label htmlFor={"volume"}>Volume:</label>
        <input
          type={"number"}
          id={"volume"}
          className={"titleInput"}
          value={props.evidenceData.volume}
          onChange={(e) => {
            var newData = props.evidenceData;
            newData.volume = e.target.value;
            props.setEvidenceData(newData);
          }}
        ></input>
      </div>
      <div>
        <label htmlFor={"number"}>Number:</label>
        <input
          type={"number"}
          id={"number"}
          className={"titleInput"}
          value={props.evidenceData.number}
          onChange={(e) => {
            var newData = props.evidenceData;
            newData.number = e.target.value;
            props.setEvidenceData(newData);
          }}
        ></input>
      </div>
      <div>
        <label htmlFor={"pages"}>Pages:</label>
        <input
          type={"text"}
          id={"pages"}
          className={"titleInput"}
          value={props.evidenceData.pages}
          onChange={(e) => {
            var newData = props.evidenceData;
            newData.pages = e.target.value;
            props.setEvidenceData(newData);
          }}
        ></input>
      </div>
    </div>
  );
}
