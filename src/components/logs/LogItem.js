import React, { Component } from 'react'
import Background from '../../img/header/home-bg.jpg'

export default class LogItem extends Component {
	render() {
		return (
			<div id="logItem" className="logItem">
				<header className="masthead" style={logHeaderStyle}>
					<div className="overlay">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 col-md-10 mx-auto">
									<div className="site-heading">
										<h1>Clean Blog</h1>
										<span className="subheading">A Blog Theme by Start Bootstrap</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>	
				<p>This is the whole page for the blog</p>				
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