import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { Link, animateScroll as Scroll } from 'react-scroll';


export default class Header extends Component {
	render() {
		return (
			<Navbar bg="light" variant="light" expand="lg">
				<Navbar.Brand href="#">Andrew</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
				<Navbar.Collapse id="responsive-navbar-nav">		
					<Nav className="mr-auto">
						<Nav.Item>
							<NavLink exact to="/" className="home">Home</NavLink> &nbsp;    
						</Nav.Item>
						<Nav.Item>
							<NavLink to="/about" className="about">About</NavLink> &nbsp;  
						</Nav.Item>
						<Nav.Item>
							<NavLink to="/log" className="log">Captain's Log</NavLink> &nbsp;  
						</Nav.Item>
						<Nav.Item>
							<NavLink to="/work">My Work</NavLink> &nbsp;   
						</Nav.Item>
						<Nav.Item>
							<NavLink to="/dogs">Dogs</NavLink> &nbsp;   
						</Nav.Item>
						<Nav.Item>
							<NavLink to="/contact">Contact</NavLink> &nbsp;   
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}

