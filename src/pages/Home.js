import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap';
import Background from '..img/ocean-sunset-golden-hr.jpg';

export default class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<br />
				<Jumbotron>
					<p>
						I am the website of Andrew Moss. All of the views shared in this website
						are his own. 
						<br /> If you don't like it, go build your own website. 
						<br /> Peace and love.
					</p>
				</Jumbotron>

			</React.Fragment>
		)
	}
}
