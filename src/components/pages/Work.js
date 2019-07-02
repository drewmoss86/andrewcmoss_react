import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Resume from '../../files/AMResume062019_HH_IllustFormat.pdf';
import cimt from '../../img/cimt_screenshot_mobile.png';

export default class Work extends Component {
	render() {
		return (
			<section id="work" className="work">
				<div className="container">
				<h1 className="mywork-header section-header">> andrewMoss.<span>portfolio</span>();</h1>
				<div className="my-work">
						<div className="project-container">
							<div className="project cimt">
								<div className="project-image">
									<img src={cimt} alt="cimt-img" />
								</div>
								<div className="project-description">
									<h4>CIMT <a target="_blank" rel="noopener noreferrer" href="http://cimt.us-west-2.elasticbeanstalk.com/login"><FontAwesomeIcon icon={faExternalLinkAlt} size="sm" /></a></h4>
									<h6>This web application is a Campus Incident Management Tool (CIMT) that I built for my PHP/MySQL class.</h6>
									
									<p>
									We were required to design and create the database with MySQL, develop the web application with PHP, utilizing any framework
									and style accordingly to be visually appealing.
									</p>

									<p>
									Technologies used: PHP 7.2, Laravel 5.8, HTML5, CSS3, MySQL 5.7, JavaScript
									</p>
								</div>
							</div>
						</div>

						<div className="icons">
							<a target="_blank" rel="noopener noreferrer" className="resume" href={Resume}> <FontAwesomeIcon icon={faFilePdf} size="3x" /></a>
							<a target="_blank" rel="noopener noreferrer" className="github" href="https://github.com/drewmoss86"> <FontAwesomeIcon icon={faGithub} size="3x" /></a>
							<a target="_blank" rel="noopener noreferrer" className="linkedin" href="https://www.linkedin.com/in/andrew-cheng-moss/"> <FontAwesomeIcon icon={faLinkedin} size="3x" /></a>
						</div>
				</div>
				</div>	
			</section>
		)
	}
}