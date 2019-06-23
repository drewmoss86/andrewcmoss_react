import React, { Component } from 'react';
import uuid from 'uuid';
import axios from 'axios';
export default class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: [
				name => '',
				organization => '',
				email => '',
				phone => '',
				message => ''
			]
		}
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
			id: uuid.v4(),
			name: this.state.name,
			organization: this.state.organization,
			email: this.state.email, 
			phone: this.state.phone, 
			message: this.state.message
		}		

		axios.post('/contact/add', newContact)
			.then(res => console.log(res.data));


		//clear fields after submission
		this.setState({ 
			name: '', 
			organization: '', 
			email: '', 
			phone: '', 
			message: '' 
		});

	}

	onChange = e => this.setState({[e.target.name]: e.target.value});

	render() {
		return (
			<div className="container">
				<h1>Contact Me</h1>
				<br />
				<div className="container contact-form">
					<form onSubmit={this.onSubmit} action="/add">
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
									<input type="text" name="name" className="form-control" placeholder="Enter your name*" value={this.state.name} onChange={this.onChange} required /> <br />
								</div>
								<div className="form-group">
									<input type="text" name="organization" className="form-control" placeholder="Enter your company name" value={this.state.organization} onChange={this.onChange} /> <br />
								</div>
								<div className="form-group">
									<input type="email" name="email" className="form-control" placeholder="Enter your email*" value={this.state.email} onChange={this.onChange} required /> <br />
								</div>
								<div className="form-group">
									<input type="tel" name="phone" className="form-control" placeholder="Enter your phone" value={this.state.phone} onChange={this.onChange} /> <br />	
								</div>
							</div>				
							<div className="col-md-6">
								<div className="form-group">
								<textarea name="message" className="form-control" placeholder="Enter your message*" value={this.state.message} onChange={this.onChange} style={textAreaStyle} required ></textarea>
								</div>
							</div>
						</div>
						<div className="form-group">
							<input type="submit" name="submit" className="btn btn-primary" value="Submit" />
						</div>
					</form>
				</div>
			</div>
		)
	}
}

const textAreaStyle = {
	width: '100%',
	height: '272px'
}