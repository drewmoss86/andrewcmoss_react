import React, { Component } from 'react';
import CKEditor from 'ckeditor4-react';
import uuid from 'uuid';
import axios from 'axios';

export default class Log extends Component {
	constructor(props) {
		super(props);
		this.state = {
			post: [
				title => '',
				body => ''
			]
		}
	}

	onSubmit = e => {
		e.preventDefault();

		console.log(`TITLE: ${this.state.title}`);
		console.log(`BODY: ${this.state.body}`);

		const newLog = {
			id: uuid.v4(),
			title: this.state.title,
			body: this.state.body
		}

	}

	onChange = e => this.setState({[e.target.name]: e.target.value});
	
	render() {
		return (
				<div id="container" className="container">
					<div className="row text-black">
						<div className="col-sm-6 offset-sm-3 text-center">
							<h1 className="display-4">Captain's Log</h1>
							<br />
							<form action="" className="justify-content-center">
								<div className="form-group">
									<input type="text" className="form-control" placeholder="Enter post title"></input>
								</div>
								<br />
								<div className="form-group">
									<CKEditor data="<p>Some data</p>" type="classic" />
									{/* <textarea type="text" className="form-control" placeholder="Enter post body" style={{height: '200px'}}></textarea> */}
								</div>
								<button type="submit" className="btn btn-success ">Post</button>
							</form>
						</div>
					</div>
				</div>
		)
	}
}

