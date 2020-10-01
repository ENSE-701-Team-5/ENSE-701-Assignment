import React, { useState } from "react";
import "./Submit.css";
import BasicForm from "./BasicForm";
export default function ProceedingsForm(props) {
  const [evidenceData, setEvidenceData] = useState(props.evidenceData);
  return (
    <div>
      <BasicForm evidenceData={evidenceData} />
      <button
        className={"submit"}
        onClick={() => {
        }}
      >
        Submit
      </button>
    </div>
  );
}
