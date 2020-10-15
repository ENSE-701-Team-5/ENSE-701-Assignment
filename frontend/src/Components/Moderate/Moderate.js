import React, { useState } from "react";
import Queue from "./Queue";
import "./Moderate.css";
import { EVIDENCE_TYPES, sendEvidenceData } from "../../common/Utils";
import ArticleForm from "../Submit/ArticleForm";
import ProceedingsForm from "../Submit/ProceedingsForm";
import BookForm from "../Submit/BookForm";
export default function Moderate() {
  const [currentEvidence, setCurrentEvidence] = useState(undefined);
  return (
    <div>
      <h2>Moderate</h2>
      <Queue
        currentEvidence={currentEvidence}
        setCurrentEvidence={setCurrentEvidence}
      />
      <div>
        {currentEvidence === undefined ? (
          <div></div>
        ) : (
          <div>
            {renderForm(currentEvidence.__t)}
            <button onClick={() => {
                currentEvidence.status = "Accepted";
                currentEvidence.acceptedDate = new Date();
                console.log(currentEvidence)
                sendEvidenceData(currentEvidence, currentEvidence.__t, "/api/submit/accept/")
                setCurrentEvidence(undefined);
            }}>Accept</button>
            {" "}
            <button onClick={() => {
                currentEvidence.status = "Rejected";
                currentEvidence.rejectedDate = new Date();
                sendEvidenceData(currentEvidence, currentEvidence.__t, "/api/submit/reject/")
                setCurrentEvidence(undefined);
            }}>Reject</button>
          </div>
        )}
      </div>
    </div>
  );

  function renderForm(currentEvidenceType) {
    switch (currentEvidenceType) {
      case EVIDENCE_TYPES[0].name:
        return (
          <ArticleForm
            evidenceData={currentEvidence}
            setEvidenceData={setCurrentEvidence}
          />
        );
      case EVIDENCE_TYPES[1].name:
        return (
          <ProceedingsForm
            evidenceData={currentEvidence}
            setEvidenceData={setCurrentEvidence}
          />
        );
      case EVIDENCE_TYPES[2].name:
        return (
          <BookForm
            evidenceData={currentEvidence}
            setEvidenceData={setCurrentEvidence}
          />
        );
      default:
        return <React.Fragment></React.Fragment>;
    }
  }
}
