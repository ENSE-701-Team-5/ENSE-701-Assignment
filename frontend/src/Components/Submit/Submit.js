import React, { useState } from "react";
import { EVIDENCE_TYPES } from "../../common/Utils";
import ArticleForm from "./ArticleForm";
import BookForm from "./BookForm";

export default function Submit() {
  const [currentEvidenceType, setEvidenceType] = useState("");
  const handleFieldChange = (fieldId, value) => {
    console.log(fieldId)
    console.log(value)
  }; 
  return (
    <div>
      <h2>Submit</h2>
      <div className="container">
          <h4>Evidence Type: {currentEvidenceType}</h4>
          {EVIDENCE_TYPES.map((data, key) => {
            return (
              <React.Fragment>
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
        return <ArticleForm onChange={(handleFieldChange)}/>
      case EVIDENCE_TYPES[1].name:
        return <React.Fragment></React.Fragment>
      case EVIDENCE_TYPES[2].name:
        return <BookForm />
      default:
        return <React.Fragment></React.Fragment>
    }
  }

 
}
