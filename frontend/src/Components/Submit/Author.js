import React from "react";
import "./Submit.css";
export default function Author(props) {
  return (
    <div>
      <label htmlFor={props.author}>Author: </label>
      <input
        type={"text"}
        className={"authorInput"}
        id={props.index}
        value={props.author}
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
    var array = props.evidenceData.authors;
    array[index] = value;
    var newData = props.evidenceData;
    newData.authors = array;
    console.log(newData);
    props.setEvidenceData({...newData});
  }

  function removeAuthor(index) {
    var array = props.evidenceData.authors
    array.splice(index, 1);
    var newData = props.evidenceData;
    newData.authors = array;
    console.log(array)
    props.setEvidenceData({...newData});
    console.log(props.evidenceData);
  }
}
