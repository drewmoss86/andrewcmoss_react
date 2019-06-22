import React, { Component } from 'react'

export default class Contact extends Component {
	render() {
		return (
			<div className="container">
				<h1>Contact Me</h1>
				<br />
				<div className="container contact-form">
					<form method="post">
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
									<input type="text" name="name" className="form-control" placeholder="Enter your name*" required /> <br />
								</div>
								<div className="form-group">
									<input type="text" name="organization" className="form-control" placeholder="Enter your company name" /> <br />
								</div>
								<div className="form-group">
									<input type="email" name="email" className="form-control" placeholder="Enter your email*" required /> <br />
								</div>
								<div className="form-group">
									<input type="tel" name="phone" className="form-control" placeholder="Enter your phone" /> <br />	
								</div>
							</div>				
							<div className="col-md-6">
								<div className="form-group">
								<textarea name="message" className="form-control" placeholder="Enter your message*" style={textAreaStyle} required ></textarea>
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