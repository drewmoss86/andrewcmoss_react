import React, { Component } from 'react'
import Background from '../../img/header/action-ai-device-1786x358.jpg'

export default class About extends Component {
	render() {
		return (
			<div id="about" className="about">
				<header className="masthead" style={logHeaderStyle}>
					<div className="overlay">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 col-md-10 mx-auto">
									<div className="site-heading">
										<h1 className="display-4" style={{color: 'white'}}>About</h1>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>	
				<br />
				<p>

				</p>
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

