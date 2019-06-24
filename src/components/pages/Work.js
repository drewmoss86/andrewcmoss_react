import React, { Component } from 'react'
import Background from '../../img/header/outdoors-coffee-1786x358.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Resume from '../../files/AMResume062019_HH_IllustFormat.pdf';

export default class Work extends Component {
	render() {
		return (
			<div id="work" className="work">
				<header className="masthead" style={headerStyle}>
					<div className="overlay">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 col-md-10 mx-auto">
									<div className="site-heading">
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>	
				<h1 className="display-4">My Work</h1>
				<br />
				<div className="container my-work">
					<table>
						<tbody>
							<tr><td><h2 style={{paddingRight: '20px', display: 'inline-block'}}>Resume</h2></td><td><a className="resumeLink" href={Resume}> <FontAwesomeIcon icon={faFilePdf} size="3x" /></a></td></tr>
							<tr><td><h2 style={{paddingRight: '20px', display: 'inline-block'}}>Github</h2></td><td><a className="resumeLink" href="https://github.com/drewmoss86"> <FontAwesomeIcon icon={faGithub} size="3x" /></a></td></tr>
							<tr><td><h2 style={{paddingRight: '20px', display: 'inline-block'}}>LinkedIn</h2></td><td><a className="resumeLink" href="https://www.linkedin.com/in/andrew-moss-91325016"> <FontAwesomeIcon icon={faLinkedin} size="3x" /></a></td></tr>
						</tbody>
					</table>
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
