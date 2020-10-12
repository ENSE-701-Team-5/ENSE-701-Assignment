import React, { useState } from "react";
import { EVIDENCE_TYPES, sendEvidenceData } from "../../common/Utils";
import ArticleForm from "./ArticleForm";
import ProceedingsForm from "./ProceedingsForm";
import BookForm from "./BookForm";

export default function Submit(props) {
  const [currentEvidenceType, setEvidenceType] = useState("");
  const [evidenceData, setEvidenceData] = useState({title: "", authors: [], status : "To be moderated"});

  return (
    <div>
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
        {currentEvidenceType === "" ? <React.Fragment></React.Fragment> : <button className={"submit"} onClick={() => {
          sendEvidenceData(evidenceData, currentEvidenceType, "/api/submit/");
        }}>
          Submit
        </button>}
      </div>
    </div>
  );

  function renderForm(currentEvidenceType) {
    console.log(currentEvidenceType);
    switch (currentEvidenceType) {
      case EVIDENCE_TYPES[0].name:
        return (
          <ArticleForm
            evidenceData={evidenceData}
            setEvidenceData={setEvidenceData}
          />
        );
      case EVIDENCE_TYPES[1].name:
        return (
          <ProceedingsForm
            evidenceData={evidenceData}
            setEvidenceData={setEvidenceData}
          />
        );
      case EVIDENCE_TYPES[2].name:
        return (
          <BookForm
            evidenceData={evidenceData}
            setEvidenceData={setEvidenceData}
          />
        );
      default:
        return <React.Fragment></React.Fragment>;
    }
  }
}
