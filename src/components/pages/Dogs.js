import React, { Component } from 'react'

export default class Dogs extends Component {
	render() {
		return (
			<div className="container">
				<h1>My Dogs</h1>
				<p>
					<em>These are my dogs. There are many like them, but these are mine. <br />
					My dogs are my best friends. They are my life. I must master them as I must master my life. <br />
					Without me, my dogs are homeless. Without my dogs, my life is pointless. </em>
				</p>
				<div className="container">
					<p>Yoda</p>
					<div id="yodaCarousel" className="carousel slide" data-ride="carousel">
						<ol className="carousel-indicators">
							<li data-target="#yodaCarousel" data-slide-to="0" className="active"></li>
							<li data-target="#yodaCarousel" data-slide-to="1"></li>
							<li data-target="#yodaCarousel" data-slide-to="2"></li>
						</ol>
						<div className="carousel-inner">
							<div id="yodaCarousel-1" className="carousel-item active">
								<img className="d-block w-100" src={require('../../img/yoda/Yoda_1.JPG')} alt="First slide" />
							</div>
							<div id="yodaCarousel-2" className="carousel-item">
								<img className="d-block w-100" src={require('../../img/yoda/Yoda_2.JPG')} alt="Second slide" />
							</div>
							<div id="yodaCarousel-3" className="carousel-item">
								<img className="d-block w-100" src={require('../../img/yoda/Yoda_3.JPG')} alt="Third slide" />
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
				<br />
				<div className="container">
					<p>Lola</p>
					<div id="lolaCarousel" className="carousel slide" data-ride="carousel">
						<ol className="carousel-indicators">
							<li data-target="#lolaCarousel" data-slide-to="0" className="active"></li>
							<li data-target="#lolaCarousel" data-slide-to="1"></li>
							<li data-target="#lolaCarousel" data-slide-to="2"></li>
						</ol>
						<div className="carousel-inner">
							<div id="lolaCarousel-1" className="carousel-item active">
								<img className="d-block w-100" src={require('../../img/lola/Lola_Bath_1.JPG')} alt="First slide" />
							</div>
							<div id="lolaCarousel-2" className="carousel-item">
								<img className="d-block w-100" src={require('../../img/lola/Lola_Bath_2.JPG')} alt="Second slide" />
							</div>
							<div id="lolaCarousel-3" className="carousel-item">
								<img className="d-block w-100" src={require('../../img/lola/Lola_Bath_3.JPG')} alt="Third slide" />
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
		)
	}
}
