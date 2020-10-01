import React, { useState } from "react";

export default function SearchResults(props) {
    const { searchQuery } = props;
    const [searchResults, setSearchResults] = useState([]);
    return (
        <div>
        <button onClick={() => {
            getSearchResults(searchQuery);
        }}>
            Search
        </button>
        {(searchResults === undefined) ? <div></div> : searchResults.map((data, key) => {
          return (
            <React.Fragment key={key}>
            <div>
                <h4>{data.title}</h4>
            </div>
            </React.Fragment>
          );
        })}
        </div>
    )

    async function getSearchResults(query) {
       await fetch('http://localhost:5000/api/search/' + searchQuery, {
           headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
         })
        .then(async function(response) { 
            if(response.ok) {
                var results = await response.json();
                console.log(results);
                if(results.message) {
                    alert(results.message);
                }
                else {
                         setSearchResults(results);
                        }
            }
        })
        .then(function(data) {
            console.log(data);
        });
    }
}