import React, { useState } from "react";
import Result from "../Search/Result";
export default function Queue(props) {
  const [queue, setQueue] = useState([]);
  return (
    <div>
      <button
        onClick={() => {
          getQueue();
        }}
      >
        Load Queue
      </button>{" "}
      <div className={"scrollable-div"}>
        {queue === undefined ? (
          <div></div>
        ) : (
          queue.map((data, key) => {
            return (
              <span
                onClick={() => {
                  console.log("test");
                  props.setCurrentEvidence(data);
                }}
                key={key}
              >
                <Result key={key} data={data} />
              </span>
            );
          })
        )}
      </div>
    </div>
  );

  async function getQueue() {
    await fetch("http://localhost:5000/api/moderate/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    }).then(async function (response) {
      if (response.ok) {
        var results = await response.json();
        console.log(results);
        if (results.message) {
          alert(results.message);
        } else {
          setQueue(results);
        }
      }
    });
  }
}
