import React, { Component } from 'react';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
// import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
	render() {
		return (
			<nav className="navbar">
				<ul>
					<li><a href="#home">Home</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#work">My Work</a></li>
					<li><a href="#dogs">My Dogs</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</nav>
		)
	}
}
