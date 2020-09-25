import React, { useState } from "react";

export default function Author(props) {
  const { author } = props;
  const [authorName, setAuthor] = useState(author);
  console.log(author);
  return (
    <React.Fragment>
      <label htmlFor={author}>{author}</label>
      <input type={"text"} id={author}></input>
    </React.Fragment>
  );
}
