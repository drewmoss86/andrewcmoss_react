import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { Link, animateScroll as Scroll } from 'react-scroll';


export default class Header extends Component {
	render() {
		return (
			<Navbar bg="light" variant="light" expand="lg">
				{/* <Navbar.Brand href="#">Andrew</Navbar.Brand> */}
				<Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
				<Navbar.Collapse id="responsive-navbar-nav">		
					<Nav className="ml-auto">
						<Nav.Item style={navItemStyle}>
							<NavLink style={navLinkStyle} exact to="/" className="home">Home</NavLink> &nbsp;    
						</Nav.Item>
						<Nav.Item style={navItemStyle}>
							<NavLink style={navLinkStyle} to="/about" className="about">About</NavLink> &nbsp;  
						</Nav.Item>
						<Nav.Item style={navItemStyle}>
							<NavLink style={navLinkStyle} to="/log" className="log">Captain's Log</NavLink> &nbsp;  
						</Nav.Item>
						<Nav.Item style={navItemStyle}>
							<NavLink style={navLinkStyle} to="/work">My Work</NavLink> &nbsp;   
						</Nav.Item>
						<Nav.Item style={navItemStyle}>
							<NavLink style={navLinkStyle} to="/dogs">My Dogs</NavLink> &nbsp;   
						</Nav.Item>
						<Nav.Item style={navItemStyle}>
							<NavLink style={navLinkStyle} to="/contact">Contact</NavLink> &nbsp;   
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}

const navItemStyle = {
	marginLeft: '10px',
	marginRight: '10px',
}

const navLinkStyle = {
	color: 'gray'
}