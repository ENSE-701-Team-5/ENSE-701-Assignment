import React from "react";
export default function Result(props) {
  const { data } = props;
  return (
    <div className={"searchResult"}>
      <h4>{data.title}</h4>
      by{" "}
      {data.authors.map((author, key) => {
        return (
          <span key={key}>
           {author + " "}
          </span>
        );
      })}
    </div>
  );
}
