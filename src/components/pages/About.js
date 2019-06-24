import React, { Component } from 'react'
import Background from '../../img/header/action-ai-device-1786x358.jpg'

export default class About extends Component {
	render() {
		return (
			<div id="about" className="about">
				<header className="masthead" style={headerStyle}></header>	
				<h1 className="display-4">About Me</h1>
				<br />
				<p>	He passion for technology, science fiction, eating, traveling, IPAs, and learning as much as possible. </p> 					
			</div>
		)
	}
}

const headerStyle = {
	padding: '250px 0 100px',
	backgroundImage: `url(${Background})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
}

