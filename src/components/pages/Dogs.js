import React, { Component } from 'react'
// import Background from '../../img/header/dog-3644029_1280.png';

export default class Dogs extends Component {
	render() {
		return (
			<section id="dogs">
				<header className="masthead"></header>
				<h1 className="display-4">My Dogs</h1>
				<p>
					<em>These are my dogs. There are many like them, but these are mine. <br />
					My dogs are my best friends. They are my life. I must master them as I must master my life. <br />
					Without me, my dogs are homeless. Without my dogs, my life is pointless. </em>
				</p>
				{/* <nav className="navbar dogs">
					<ul>
						<li><a href="#yoda">Yoda</a></li>
						<li><a href="#lola">Lola</a></li>
					</ul>
				</nav> */}
			</section>
		)
	}
}

// const headerStyle = {
// 	padding: '250px 0 100px',
// 	backgroundImage: `url(${Background})`,
// 	backgroundRepeat: 'no-repeat',
// 	backgroundSize: 'cover',
// }
