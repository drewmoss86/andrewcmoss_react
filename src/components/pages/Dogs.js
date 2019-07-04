import React, { Component } from 'react'

export default class Dogs extends Component {
	render() {
		return (
			<section id="dogs">
				<div className="container dogs-container">
					<h1 className="dogs-header section-header">> andrewMoss.<span>dogs</span>();</h1>					
					<div className="my-dogs">
						<div className="my-dogs-ode">
							<p>
								<em>These are my dogs. There are many like them, but these are mine. 
								My dogs are my best friends. They are my life. I must master them as I must master my life. 
								Without me, my dogs are homeless. Without my dogs, my life is pointless. </em>
							</p>
						</div>
							<div className="lola">
								<div id="lola-pic" className="lola-pic"></div>
									<div id="lola-bio">
										<p>Name: Lola</p>
										<p>Age: {Math.abs(new Date().getFullYear() - new Date(2013, 11, 18).getFullYear())}</p>
										<p>Weight: 45 lbs</p>
										<p>Enjoys: Long walks, playing at the park, <br /> chasing squirrels and shedding  and drooling all over guests</p>
									</div>
							</div>
							<div className="yoda">
								<div id="yoda-pic" className="yoda-pic"></div>
									<div id="yoda-bio">
										<p>Name: Yoda</p>
										<p>Age: {Math.abs(new Date().getFullYear() - new Date(2012, 3, 29).getFullYear())}</p>
										<p>Weight: 25 lbs</p>
										<p>Enjoys: Short walks, barking at everything and  <br /> getting maximum treats with minimum effort</p>
									</div>
							</div>
					</div>
				</div>
			</section>
		)
	}
}
