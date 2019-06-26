import React, { Component } from 'react';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
// import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
	render() {
		return (
			<nav className="navbar">
				{/* <ul> */}
					<li><a href="#home">Home</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#work">My Work</a></li>
					<div class="dropdown">
						<button class="dropbtn"><li><a href="#dogs">My Dogs</a><i class="fa fa-caret-down"></i></li></button>
						<div class="dropdown-content">
							<ul className="dropdown-content">
								<li className="dropdown-content"><a className="dropdown-content" href="#yoda">Yoda</a></li>
								<li className="dropdown-content"><a className="dropdown-content" href="#lola">Lola</a></li>
							</ul> 
						</div>
  				</div> 
					<li><a href="#contact">Contact</a></li>
				{/* </ul> */}
			</nav>
		)
	}
}
