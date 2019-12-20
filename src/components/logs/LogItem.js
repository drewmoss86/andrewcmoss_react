import React, { Component } from "react";
import Background from "../../img/header/home-bg.jpg";

export default class LogItem extends Component {
  render() {
    return (
      <div id="logItem" className="logItem">
        <header className="masthead" style={logHeaderStyle}></header>
        <h1>Clean Blog</h1>
        <p>{this.props.log.title} </p>
      </div>
    );
  }
}

const logHeaderStyle = {
  // backgroundImage: `url(${Background})`,
  backgroundImage: "https://cdn1.andrewcmoss.com/img/header/home-bg.jpg",
  padding: "156px 0 100px",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
};
