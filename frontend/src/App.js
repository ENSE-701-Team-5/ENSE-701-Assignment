import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import "./App.css";
export default function App() {
  return (
    <div>
      <Router>
        <NavigationBar />
        <div className={"content"}>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  return <h2> Home </h2>;
}

function About() {
  return (
    <div>
      <h2> About </h2>
      <h3>What is SEER?</h3>
      <p>
        This is an University Project created for ENSE701. It is a searchable
        database of evidence which has been curated by SE experts in the
        Software Engineering Research lab (SERL) at AUT.
      </p>
      <h3> The Team </h3>
      <ul>
        <li>
          Essa Thaver -<a href="https://github.com/EssaThaver"> @EssaThaver </a>
        </li>
        <li>
          Jullan Quevedo -
          <a href="https://github.com/Jullan2018"> @Jullan2018 </a>
        </li>
        <li>
          Matt McLuskie -{" "}
          <a href="https://github.com/MattMcLuskie"> @MattMcLuskie </a>
        </li>
        <li>
          Millan Uka - <a href="https://github.com/MillanUka"> @MillanUka </a>
        </li>
      </ul>
    </div>
  );
}

function Register() {
  return <h2> Register </h2>;
}

function Login() {
  return <h2>Login</h2>;
}
