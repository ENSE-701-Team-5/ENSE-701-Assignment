import React, { useState } from "react";
import "./Submit.css";
export default function Title() {
  return (
    <div>
      <label htmlFor={author}>Author: </label>
      <input type={"text"} className={"authorInput"} id={author} ></input>
    </div>
  );
}
