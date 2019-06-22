//sets up the reusable Navbar component
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
         <ul>
          <li className="itemOne">Test Your Memory</li>
          <li className="itemTwo">Status: {this.props.status}</li>
          <li className="itemThree">Score: {this.props.score}</li>
          <li className="itemFour">Top Score: {this.props.topscore}</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;