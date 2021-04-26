import React, { Component } from "react";
import axios from "axios";

import { Form } from "react-bootstrap";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // contacts: [
      name: "",
      organization: "",
      email: "",
      phone: "",
      message: ""
      // ]
    };
  }

  // componentDidMount() {
  // 	fetch('/api/contacts') //access route from express
  // 	.then(res => res.json())
  // 	.then(contacts => this.setState({contacts}, () => console.log("Contacts fetched...", contacts)))
  // }

  onSubmit = e => {
    e.preventDefault(); //prevent from actual submit for testing
    // this.addContact(this.state.name, this.state.organization, this.state.email, this.state.phone, this.state.message);

    console.log(`NAME: ${this.state.name}`);
    console.log(`ORG: ${this.state.organization}`);
    console.log(`EMAIL: ${this.state.email}`);
    console.log(`PHONE: ${this.state.phone}`);
    console.log(`MESSAGE: ${this.state.message}`);

    const newContact = {
      name: this.state.name,
      organization: this.state.organization,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message
    };

    axios
      .post("/contact/add", newContact)
      .then(res => alert("Contact submitted!"))
      .catch(err => {
        console.log(err);
      });

    //clear fields after submission
    this.setState({
      name: "",
      organization: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <section id="contact" className="contact">
        <div className="container contact-container">
          <div className="col-md-6 contact-form">
            <h1 className="contact-header section-header">
              > andrewMoss.<span>contact</span>();
            </h1>
            <Form onSubmit={this.onSubmit} action="/add">
              <div className="console-title-bar"></div>
              <div className="contact-console">
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label>> Name*</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder=""
                        value={this.state.name || ""}
                        onChange={this.onChange}
                        required
                      />{" "}
                      <br />
                    </div>
                    <div className="form-group">
                      <label>> Company</label>
                      <input
                        type="text"
                        name="organization"
                        className="form-control"
                        placeholder=""
                        value={this.state.organization || ""}
                        onChange={this.onChange}
                      />{" "}
                      <br />
                    </div>
                    <div className="form-group">
                      <label>> Email*</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder=""
                        value={this.state.email || ""}
                        onChange={this.onChange}
                        required
                      />{" "}
                      <br />
                    </div>
                    <div className="form-group">
                      <label>> Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-control"
                        maxLength="12"
                        placeholder=""
                        value={this.state.phone || ""}
                        onChange={this.onChange}
                      />{" "}
                      <br />
                    </div>
                    <div className="form-group">
                      <label>> Message*</label>
                      <textarea
                        name="message"
                        className="form-control"
                        placeholder=""
                        value={this.state.message || ""}
                        onChange={this.onChange}
                        style={textAreaStyle}
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  name="submit"
                  className="btn btn-primary"
                  style={{ width: "100px" }}
                  value="Submit"
                />
              </div>
            </Form>
          </div>
        </div>
      </section>
    );
  }
}

const textAreaStyle = {
  width: "100%"
};
