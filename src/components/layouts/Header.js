import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Jumbotron } from 'react-bootstrap';


export default class Header extends Component {
	render() {
		return (
			<Navbar bg="dark" variant="dark" expand="lg">
				<Navbar.Brand href="#">Andrew</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
				<Navbar.Collapse id="responsive-navbar-nav">		
					<Nav className="mr-auto">
						<Nav.Item>
							<Nav.Link href="/">Home</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="/about">About</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="/log">Captain's Log</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="/work">My Work</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="#dogs">Dogs</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="#contact">Contact</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}

