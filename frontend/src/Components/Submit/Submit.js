import React, { useState } from "react";
import { EVIDENCE_TYPES } from "../../common/Utils";
import ArticleForm from "./ArticleForm";
import ProceedingsForm from "./ProceedingsForm";

export default function Submit() {
  const [currentEvidenceType, setEvidenceType] = useState("");
  const [evidenceData, setEvidenceData] = useState({title: "", authors: []});

  return (
    <div>
      <h2>Submit</h2>
      <div className="container">
          <h4>Evidence Type: {currentEvidenceType}</h4>
          {EVIDENCE_TYPES.map((data, key) => {
            return (
              <React.Fragment key={key}>
                <span
                  className={"evidenceType"}
                  onClick={() => {
                    setEvidenceType(data.name);
                  }}
                  key={key}
                >
                  {data.name}
                </span>{" "}
              </React.Fragment>
            );
          })}
          {renderForm(currentEvidenceType)}
      </div>
    </div>
  );

  function renderForm(currentEvidenceType) {
    console.log(currentEvidenceType)
    switch (currentEvidenceType) {
      case EVIDENCE_TYPES[0].name:
        return <ArticleForm evidenceData={evidenceData}/>
      case EVIDENCE_TYPES[1].name:
        return <ProceedingsForm evidenceData={evidenceData}/>
      case EVIDENCE_TYPES[2].name:
        return <React.Fragment ></React.Fragment>
      default:
        return <React.Fragment></React.Fragment>
    }
  }

 
}
