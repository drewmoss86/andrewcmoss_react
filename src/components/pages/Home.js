import React, { Component } from 'react'
// import Background from '../../img/header/ocean-sunset-golden-hr.jpg';
// import Background from '../../img/header/beach-sunset.jpg';
import Background from '../../img/header/calm-waters-dark-1786x358.jpg';


export default class Home extends Component {
	render() {
		return (
			<div className="home" id="home" >
				<header className="masthead" style={headerStyle}>
					<div className="overlay">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 col-md-10 mx-auto">
									<div className="site-heading">
										<h1 className="display-4" style={{color: 'white'}}>Andrew Moss</h1>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>	
			</div>
		)
	}
}

const headerStyle = {
	padding: '156px 0 100px',
	backgroundImage: `url(${Background})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
}
