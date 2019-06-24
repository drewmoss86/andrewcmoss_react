import React, { Component } from 'react';
// import CKEditor from 'ckeditor4-react';
import uuid from 'uuid';
import axios from 'axios';
import Background from '../../img/header/home-bg.jpg'
import AddPostIcon from '../../icons/plus-circle-blue.svg'

export default class AddLog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			log: [
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

		axios.post('/log/add', newLog)
		.then(res => console.log(res.data));

		//clear the fields after submission
		this.setState({
			title: '',
			body: ''
		});

	}

	onChange = e => this.setState({[e.target.name]: e.target.value});

	render() {
		return (
				<div id="addLog" className="addLog">
					<header className="masthead" style={logHeaderStyle}>
						<div className="overlay">
							<div className="container">	
								<div className="row">
									<div className="col-lg-8 col-md-10 mx-auto">
										<div className="site-heading">
											<h1 className="display-4">Captain's Log</h1>
											<span className="subheading">A Blog Theme by Start Bootstrap</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</header>	
					<div className="row text-black">
						<div className="col-sm-6 offset-sm-3 text-center">
							
							<br />
							<form onSubmit={this.onSubmit} action="/add" className="justify-content-center">
								<div className="form-group">
									<input 
										type="text" 
										name="title"
										className="form-control" 
										placeholder="Enter post title" 
										value={this.state.title}
										onChange={this.onChange} />
								</div>
								<br />
								<div className="form-group">
									{/* <CKEditor data="<p>Some data</p>" type="classic" /> */}
									<textarea 
										type="text" 
										name="body"
										className="form-control" 
										placeholder="Enter post body" 
										style={{height: '200px'}}
										value={this.state.body}
										onChange={this.onChange}
									>
									</textarea>
								</div>
								<input type="submit" name="post" className="btn btn-success" style={{width: '100px'}} value="Post" />
							</form>
						</div>
					</div>
				</div>
		)
	}
}

const logHeaderStyle = {
	backgroundImage: `url(${Background})`,
	padding: '156px 0 100px',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
}

const postTitleStyle = {
	color: 'black'
}

const postSubtitleStyle = {
	color: 'black'
}

const addPostIconStyle = {
	width: '80px',
	height: '80px'
}