import React, { Component } from 'react'
// import Background from '../../img/header/ocean-sunset-golden-hr.jpg';
// import Background from '../../img/header/beach-sunset.jpg';
import Background from '../../img/header/calm-waters-dark-1786x358.jpg';
import FlyIn from '../../assets/animation';

export default class Home extends Component {
	render() {
		return (
			<div className="home" id="home" >
				<header className="masthead" style={headerStyle}>
					<div className="overlay">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 col-md-10 mx-auto">
									<div className="container">
										<ul className="fly-in-text hidden" id="about-items">
											<li>A</li>
											<li>n</li>
											<li>d</li>
											<li>r</li>
											<li>e</li>
											<li>w</li>
											<li></li>
											<li>M</li>
											<li>o</li>
											<li>s</li>
											<li>s</li>
										</ul>
										<ul className="after-fly-in-text hidden" id="about-items">
											<li>A</li>
											<li>n</li>
											<li>d</li>
											<li>r</li>
											<li>e</li>
											<li>w</li>
											<li></li>
											<li>M</li>
											<li>o</li>
											<li>s</li>
											<li>s</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>	
				<div className="container home-intro">
					<p>Welcome to my website!</p>
					<p>This was website built entirely with JavaScript, utilizing the MERN stack</p>
					<p>Please feel free to roam about the cabin, but it is still in progress so some items may shift during flight</p>
				</div>
			</div>
		)
	}
}

const headerStyle = {
	padding: '250px 0 100px',
	backgroundImage: `url(${Background})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
}
