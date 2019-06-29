import React, { Component } from 'react';

export default class About extends Component {
	render() {
		return (
			<section id="about" className="about">
				<h1 className="display-4">About Me</h1>
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<img className="profile-pic" src={require('../../img/andrew-flower.JPG')} />
						</div>
							
						<div className="col-md-6 about-text">
								{/* Welcome to my website! <br />
								This was website built entirely with JavaScript, utilizing the MERN stack 
								Please feel free to roam about the cabin, but it is still a work in progress so some items may shift during flight <br /> */}

							<p>My name is Andrew Moss and I enjoy building things for the world wide web!</p>
							<br />
							<p>I am fueled by my passion for technology, science fiction, sushi, caffeine and IPAs</p>

							<p>When I'm not working, I enjoy hanging out with my dogs, traveling, reading, and learning </p>
						</div>
					</div>
				</div>
			</section>
		)
	}
}


