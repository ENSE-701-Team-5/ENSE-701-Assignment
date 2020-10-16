import React from "react";
import "./Result.css";
import { EVIDENCE_TYPES } from "../../common/Utils";
export default function Result(props) {
  const { data } = props;
  console.log(data);
  return (
    <div className={"searchResult"}>
      <h4>Title: {data.title} </h4>
      <h4>Evidence Type: {data.__t}</h4>
      <h4>Author(s)</h4>
      <b>
        {data.authors.map((author, key) => {
          return <React.Fragment key={key}>{author + ", "}</React.Fragment>;
        })}
      </b>
      {data.year === undefined ? (
        <React.Fragment></React.Fragment>
      ) : (
        <h4>Year: {data.year}</h4>
      )}
      {data.month === undefined ? (
        <React.Fragment></React.Fragment>
      ) : (
        <h4>Month: {data.month}</h4>
      )}
      {data.doi === undefined ? (
        <React.Fragment></React.Fragment>
      ) : (
        <h4>DOI: {data.doi}</h4>
      )}
      {renderDetails(data)}
    </div>
  );
}

function renderDetails(data) {
  switch (data.__t) {
    case EVIDENCE_TYPES[0].name:
      return (
        <React.Fragment>
          {data.journal === undefined ? (
            <React.Fragment></React.Fragment>
          ) : (
            <h4>Journal: {data.journal}</h4>
          )}
          {data.volume === undefined ? (
            <React.Fragment></React.Fragment>
          ) : (
            <h4>Volume: {data.volume}</h4>
          )}
          {data.number === undefined ? (
            <React.Fragment></React.Fragment>
          ) : (
            <h4>Number: {data.number}</h4>
          )}
          {data.pages === undefined ? (
            <React.Fragment></React.Fragment>
          ) : (
            <h4>Pages: {data.pages}</h4>
          )}
        </React.Fragment>
      );
    case EVIDENCE_TYPES[1].name:
      return data.publisher === undefined ? (
        <React.Fragment></React.Fragment>
      ) : (
        <h4>Publisher: {data.publisher}</h4>
      );
    case EVIDENCE_TYPES[2].name:
      return data.publisher === undefined ? (
        <React.Fragment></React.Fragment>
      ) : (
        <h4>Publisher: {data.publisher}</h4>
      );
    default:
      return <React.Fragment></React.Fragment>;
  }
}
