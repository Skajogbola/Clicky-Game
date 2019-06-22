//sets up the reusable Navbar component
import React from "react";
import "./Navbar.css";

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="/">Test Your Memory</a>
        </li>
        <li className="brand1">{props.status}</li>
        <li className="brand2">Score: {props.score} | Top Score: {props.topScore}</li>
      </ul>
    </nav>
  )
}     
   

export default Navbar;