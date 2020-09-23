import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Terms from "./Components/Terms";
import Privacy from "./Components/Privacy";
import "./App.css";

export default function App() {
  return (
    <div>
      <Router>
        <NavigationBar />
        <div className={"content"}>
          <Switch>
            <Route path="/privacy">
              <Privacy />
            </Route>
            <Route path="/terms">
              <Terms />
            </Route>
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


