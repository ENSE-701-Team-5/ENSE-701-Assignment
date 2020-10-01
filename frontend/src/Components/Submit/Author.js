import React, { useState } from "react";
import "./Submit.css";
export default function Author(props) {
  const [author, setAuthor] = useState(props.author);
  const [evidenceData, setEvidenceData] = useState(props.evidenceData);
  console.log(evidenceData)
  return (
    <div>
      <label htmlFor={author}>Author: </label>
      <input
        type={"text"}
        className={"authorInput"}
        id={props.index}
        onChange={(e) => {
          changeAuthor(e.target.value, props.index);
        }}
      ></input>
      <button className={"removeButton"} onClick={(e) => {
        removeAuthor(props.index)
      }}>
        Remove
      </button>
    </div>
  );

  function changeAuthor(value, index) {
    var array = evidenceData.authors;
    array[index] = value
    setAuthor(value);
    var newData = evidenceData;
    newData.authors = array;
    setEvidenceData(newData);
  }

  function removeAuthor(value) {
    console.log(value);
    var array = [];
    for(var i =0; i < evidenceData.authors.length; i++) {
      if(i != value) {
        array.push(evidenceData.authors[i]);
      }
    }
    var newData = evidenceData;
    newData.authors = array;
    setEvidenceData(evidenceData);
  }
}
