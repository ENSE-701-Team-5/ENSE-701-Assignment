import React from "react";
import "./Result.css";
export default function Result(props) {
  const { data } = props;
  return (
    <div className={"searchResult"}>
      <h4>Title </h4>
      <p>{data.title}</p>
      {data.authors.map((author, key) => {
        return (
          <span key={key}>
            <h4>Author</h4>
           {author + " "}
          </span>
        );

      })}
      <h4>Published Date</h4>
      <h4>Evidence Type</h4>
    </div>
  );
}
