import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class Header extends Component {
	render() {
		return (
			<Navbar bg="dark" variant="dark" expand="sm" fixed="top">
				<Navbar.Toggle aria-controls="main-nav" />
				<Navbar.Collapse id="main-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#about">About</Nav.Link>
						<Nav.Link href="#work">My Work</Nav.Link>
						<Nav.Link href="#dogs">My Dogs</Nav.Link>
						<Nav.Link href="#contact">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}
