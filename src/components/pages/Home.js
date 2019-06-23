import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap';
// import Background from '../img/ocean-sunset-golden-hr.jpg';
import Background from '../../img/beach-sunset.jpg';

export default class Home extends Component {
	render() {
		return (
			<div className="home" id="home" >
				<div id="jumbo-image" style={jumboStyle}>
				</div> 
			</div>
		)
	}
}

const jumboStyle = {
	backgroundImage: `url(${Background})`,
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	height: '250px'
}
