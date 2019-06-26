import React, { Component } from 'react'

export default class Yoda extends Component {
	render() {
		return (
			<section id="yoda"> 
				<div className="container dogs-carousel">
						<h3>Yoda</h3>
					<div id="myDogsCarousel" className="carousel slide" data-ride="carousel">
						<ol className="carousel-indicators">
							<li data-target="#yodaCarousel" data-slide-to="0" className="active"></li>
							<li data-target="#yodaCarousel" data-slide-to="1"></li>
							<li data-target="#yodaCarousel" data-slide-to="2"></li>
							<li data-target="#yodaCarousel" data-slide-to="3"></li>
						</ol>
						<div className="carousel-inner">
							<div id="yodaCarousel-1" className="carousel-item active">
								<img className="d-block w-100" src={require('../../img/yoda/Yoda_1.JPG')} alt="Yoda-1 slide" />
							</div>
							<div id="yodaCarousel-2" className="carousel-item">
								<img className="d-block w-100" src={require('../../img/yoda/Yoda_2.JPG')} alt="Yoda-2 slide" />
							</div>
							<div id="yodaCarousel-3" className="carousel-item">
								<img className="d-block w-100" src={require('../../img/yoda/Yoda_3.JPG')} alt="Yoda-3 slide" />
							</div>
							<div id="yodaCarousel-4" className="carousel-item">
								<img className="d-block w-100" src={require('../../img/yoda/Yoda_4.jpg')} alt="Yoda-4 slide" />
							</div>
						</div>
						<a className="carousel-control-prev" href="#yodaCarousel" role="button" data-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="sr-only">Previous</span>
						</a>
						<a className="carousel-control-next" href="#yodaCarousel" role="button" data-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="sr-only">Next</span>
						</a>
					</div>
				</div>
			</section>
		)
	}
}
