import React, { Component } from 'react'
// import Background from '../../img/header/ocean-sunset-golden-hr.jpg';
// import Background from '../../img/header/beach-sunset.jpg';
import Background from '../../img/home-header/calm-waters-dark-1786x358.jpg';


export default class Home extends Component {
	render() {
		return (
			<div className="home" id="home" >
				<header id="home-header" className="bg-primary text-white" style={headerStyle}>
					<div className="container text-center">
						<h1>Andrew Moss</h1>
						<p className="lead">A landing page template freshly redesigned for Bootstrap 4</p>
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
