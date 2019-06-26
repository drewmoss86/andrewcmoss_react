import React, { Component } from 'react'

export default class Lola extends Component {
	render() {
		return (
			<section id="lola">
				<div className="container dogs-carousel">
					<h3>Lola</h3>
					<div className="container">
						<div id="myDogsCarousel" className="carousel slide" data-ride="carousel">
							<ol className="carousel-indicators">
								<li data-target="#lolaCarousel" data-slide-to="0" className="active"></li>
								<li data-target="#lolaCarousel" data-slide-to="1"></li>
								<li data-target="#lolaCarousel" data-slide-to="2"></li>
								<li data-target="#lolaCarousel" data-slide-to="3"></li>
							</ol>
							<div className="carousel-inner">
								<div id="lolaCarousel-1" className="carousel-item active">
									<img className="d-block w-100" src={require('../../img/lola/lola-boston-grass.JPG')} alt="Lola-1 slide" />
								</div>
								<div id="lolaCarousel-2" className="carousel-item">
									<img className="d-block w-100" src={require('../../img/lola/lola-boston-grass-2.JPG')} alt="Lola-2 slide" />
								</div>
								<div id="lolaCarousel-3" className="carousel-item">
									<img className="d-block w-100" src={require('../../img/lola/lola-boston-snow-1.jpg')} alt="Lola-3 slide" />
								</div>
								<div id="lolaCarousel-4" className="carousel-item">
									<img className="d-block w-100" src={require('../../img/lola/lola-boston-snow-2.jpg')} alt="Lola-4 slide" />
								</div>
							</div>
							<a className="carousel-control-prev" href="#lolaCarousel" role="button" data-slide="prev">
								<span className="carousel-control-prev-icon" aria-hidden="true"></span>
								<span className="sr-only">Previous</span>
							</a>
							<a className="carousel-control-next" href="#lolaCarousel" role="button" data-slide="next">
								<span className="carousel-control-next-icon" aria-hidden="true"></span>
								<span className="sr-only">Next</span>
							</a>
						</div>
						<br />
					</div>
				</div>
			</section>
		)
	}
}
