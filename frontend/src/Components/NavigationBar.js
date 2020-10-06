import { Link } from "react-router-dom";
import React from "react";
import "./NavigationBar.css";
export default function NavigationBar() {
  return (
    <div className={"navbar"}>
      <Link to="/"> Home </Link>
      <Link to="/about"> About </Link>
      <Link to="/submit"> Submit </Link>
      <Link to="/register"> Register </Link>
      <Link to="/login"> Login </Link>
      <Link to="/terms"> Terms of Use </Link>
      <Link to="/privacy"> Privacy Policy </Link>
    </div>
  );
}
