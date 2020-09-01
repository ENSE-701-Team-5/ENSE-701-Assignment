import { Link } from "react-router-dom";
import React from "react";
import "./NavigationBar.css";
export default function NavigationBar() {
  return (
    <div className={"navbar"}>
      <Link to="/"> Home </Link>
      <Link to="/about"> About </Link>
      <Link to="/register">
        <button>Register</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}
