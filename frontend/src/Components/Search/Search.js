import React, { useState } from "react";
import SearchResults from "./SearchResults.js";
export default function Search(props) {
    const [searchQuery, setSearchQuery] = useState("");
    
    return (
    <div>
    <form>
        <div className="search">
           <input type="text" name="search" id="search" placeholder="Search for evidence" required onChange={(e) => {
               setSearchQuery(e.target.value); 
           }}></input> 
        </div>
        <div className="advanced-search">
            <label>Advanced Search</label>
        </div>
        </form>
        <SearchResults searchQuery={searchQuery}/>
    </div>);
}

