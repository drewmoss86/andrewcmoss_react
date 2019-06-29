import React, { Component } from 'react';

export default class Navbar extends Component {
	render() {
		return (
			<nav className="navbar">
				{/* <ul> */}
					<li><a href="#home">Home</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#work">My Work</a></li>
					<div className="dropdown">
						<button className="dropbtn"><li><a href="#dogs">My Dogs</a> &nbsp; <i className="fa fa-caret-down"></i></li></button>
						<div className="dropdown-content">
							<ul className="dropdown-content">
								<li><a href="#yoda">Yoda</a></li>
								<li><a href="#lola">Lola</a></li>
							</ul>
						</div>
  				</div> 
					<li><a href="#contact">Contact</a></li>
				{/* </ul> */}
			</nav>
		)
	}
}
