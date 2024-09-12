import React from "react";
import logo from "./logo.svg";
import "./App.css";

function Part2() {
    return (
<header className="App-header">
        <p className="text-large">
        <span className="text-black">Hello</span> <span className="text-blue">React</span>
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is the React logo!</p>
        <a className="text-small-italic">(I don't know why it is here either)</a>
      </header>
        );

}
  export default Part2;