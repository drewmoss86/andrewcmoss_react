import React, { Component } from 'react';
import CKEditor from 'ckeditor4-react';
import uuid from 'uuid';
import axios from 'axios';
import Background from '../../img/log-header/home-bg.jpg'
import AddPostIcon from '../../icons/plus-circle-blue.svg'

// import LogCSS from '../../assets/css/clean-blog.css';

export default class Log extends Component {
	constructor(props) {
		super(props);
		this.state = {
			logs: [
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

		axios.post('log/add', newLog)
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
				<div id="log" className="log">
					<header className="masthead" style={logHeaderStyle}>
						<div className="overlay"></div>
						<div className="container">
							<div className="row">
								<div className="col-lg-8 col-md-10 mx-auto">
									<div className="site-heading">
										<h1>Log</h1>
										<span className="subheading">A Blog Theme by Start Bootstrap</span>
									</div>
								</div>
							</div>
						</div>
					</header>		
					<br />
					<div className="addPostIcon">
						<a href="/log"><img src={AddPostIcon} alt="AddPostIcon" style={addPostIconStyle} /></a>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-lg-8 col-md-10 mx-auto">
								<div className="post-preview">
									<a href="post.html">
										<h2 className="post-title" style={postTitleStyle}>
											Man must explore, and this is exploration at its greatest
										</h2>
										<h3 className="post-subtitle" style={postSubtitleStyle}>
											Problems look mighty small from 150 miles up
										</h3>
									</a>
									<p className="post-meta">Posted by <a href="#"> Andrew Moss </a> on September 24, 2019</p>
								</div>
								<hr />
								{/* Pager  */}
								<div className="clearfix">
									<a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
								</div>
							</div>
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