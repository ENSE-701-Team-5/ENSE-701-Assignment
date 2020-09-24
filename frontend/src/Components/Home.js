import React from "react";
import "./Home.css";



export default function Home() {
    return (
    <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <h2>Welcome To The SEER Home Page</h2> 

        <div class="search">
           <input type="text" name="search" id="search" placeholder="Search for evidence" required></input>
        </div>
        <button type="submit"><i class="fa fa-search"></i></button>
    </div>
    );

    
}