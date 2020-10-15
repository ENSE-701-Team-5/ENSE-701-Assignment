import React, { useState } from "react";
import Queue from "./Queue";
import { sendEvidenceData } from "../../common/Utils";
export default function Analyse() {
  const [currentEvidence, setCurrentEvidence] = useState(undefined);
  return (
    <div>
      <h2>Analyse</h2>
      <Queue
        currentEvidence={currentEvidence}
        setCurrentEvidence={setCurrentEvidence}
      />
      <div>
        {currentEvidence === undefined ? (
          <div></div>
        ) : (
          <div>
            <button
              onClick={() => {
                currentEvidence.analysisCompletedDate = new Date();
                currentEvidence.status = "Analysis complete";
                sendEvidenceData(
                  currentEvidence,
                  currentEvidence.__t,
                  "/api/submit/analysed/"
                );
              }}
            >
              Accept
            </button>{" "}
            <button
              onClick={() => {
                currentEvidence.rejectedDate = new Date();
                currentEvidence.status = "Rejected";
                sendEvidenceData(
                  currentEvidence,
                  currentEvidence.__t,
                  "/api/submit/reject/"
                );
              }}
            >
              Reject
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
