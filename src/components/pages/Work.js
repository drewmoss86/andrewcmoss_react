import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Resume from '../../files/AMResume062019_HH_IllustFormat.pdf';

export default class Work extends Component {
	render() {
		return (
			<section id="work" className="work">
				<h1 className="display-4">My Work</h1>
				<div className="my-work">
					<table>
						<tbody>
							<tr><td><h2 style={{paddingRight: '20px', display: 'inline-block'}}>Resume</h2></td><td><a className="resumeLink" href={Resume}> <FontAwesomeIcon icon={faFilePdf} size="3x" /></a></td></tr>
							<tr><td><h2 style={{paddingRight: '20px', display: 'inline-block'}}>Github</h2></td><td><a className="resumeLink" href="https://github.com/drewmoss86"> <FontAwesomeIcon icon={faGithub} size="3x" /></a></td></tr>
							<tr><td><h2 style={{paddingRight: '20px', display: 'inline-block'}}>LinkedIn</h2></td><td><a className="resumeLink" href="https://www.linkedin.com/in/andrew-moss-91325016"> <FontAwesomeIcon icon={faLinkedin} size="3x" /></a></td></tr>
						</tbody>
					</table>
				</div>
			</section>
		)
	}
}