import React, { Component } from "react";
// import CKEditor from 'ckeditor4-react';
// import uuid from 'uuid';
import axios from "axios";
// import Background from '../../img/header/journal-1786x358.jpg'
// import AddPostIcon from '../../icons/plus-circle-blue.svg'
import LogItem from "../logs/LogItem";

export default class Log extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: [title => "", body => "", date => ""]
    };
  }

  componentDidMount() {
    axios
      .get("/log")
      .then(({ data }) => this.setState({ logs: data }))
      .catch(err => console.log(err));
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return this.state.logs.map(log => (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="post-preview">
              <a href="/log">
                <div key={log.id}>
                  <h2 className="post-title" style={postTitleStyle}>
                    {" "}
                    <LogItem log={log} />
                  </h2>
                  <h3 className="post-subtitle" style={postSubtitleStyle}>
                    Subtitle
                  </h3>
                </div>
              </a>
              <p className="post-meta">
                Posted by <a href="/"> Andrew Moss </a> on {log.date}
              </p>
            </div>
            <hr />
          </div>
        </div>
      </div>
    ));
    // return (
    // 	<div id="log" className="log">
    // 		<header className="masthead" style={headerStyle}></header>
    // 		<br />
    // 		<h1 className="display-4">Captain's Log</h1>
    // 		<br />
    // 		<div className="addPostIcon">
    // 			<a href="/addLog"><img src={AddPostIcon} alt="AddPostIcon" style={addPostIconStyle} /></a>
    // 		</div>
    // 		<div className="container">
    // 			{/* {logs} */}
    // 		</div>
    // 	</div>
    // )
  }
}

// const headerStyle = {
// 	backgroundImage: `url(${Background})`,
// 	padding: '250px 0 100px',
// 	backgroundRepeat: 'no-repeat',
// 	backgroundSize: 'cover',
// }

const postTitleStyle = {
  color: "black"
};

const postSubtitleStyle = {
  color: "black"
};

// const addPostIconStyle = {
// 	width: '80px',
// 	height: '80px'
// }
