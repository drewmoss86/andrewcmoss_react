import React, { Component } from "react";
// import CKEditor from 'ckeditor4-react';
import uuid from "uuid";
import axios from "axios";
import Background from "../../img/header/home-bg.jpg";

export default class AddLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      log: [id => "", title => "", body => "", date => ""]
    };
  }

  onSubmit = e => {
    //date
    const today = new Date();
    const month = today.toLocaleString("en-us", { month: "long" });
    const day = today.getDate();
    const year = today.getFullYear();

    const logDate = month + " " + day + ", " + year;

    e.preventDefault();

    const newLog = {
      id: uuid.v4(),
      title: this.state.title,
      body: this.state.body,
      date: logDate
    };

    console.log(`ID: ${this.state.id}`);
    console.log(`TITLE: ${this.state.title}`);
    console.log(`BODY: ${this.state.body}`);
    console.log(`DATE: ${logDate}`);

    axios.post("/log/add", newLog).then(res => console.log(res.data));

    //clear the fields after submission
    this.setState({
      id: "",
      title: "",
      body: "",
      date: ""
    });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div id="addLog" className="addLog">
        <header className="masthead" style={logHeaderStyle}></header>
        <div className="row text-black">
          <div className="col-sm-6 offset-sm-3 text-center">
            <br />
            <h1 className="display-4">Captain's Log</h1>
            <br />
            <form
              onSubmit={this.onSubmit}
              action="/add"
              className="justify-content-center"
            >
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  placeholder="Enter post title"
                  value={this.state.title}
                  onChange={this.onChange}
                />
              </div>
              <br />
              <div className="form-group">
                {/* <CKEditor data="<p>Some data</p>" type="classic" /> */}
                <textarea
                  type="text"
                  name="body"
                  className="form-control"
                  placeholder="Enter post body"
                  style={{ height: "200px" }}
                  value={this.state.body}
                  onChange={this.onChange}
                ></textarea>
              </div>
              <input
                type="submit"
                name="post"
                className="btn btn-success"
                style={{ width: "100px" }}
                value="Post"
              />
            </form>
          </div>
        </div>
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
