import React, { Component } from 'react'
import Background from '../../img/header/dog-3644029_1280.png';

export default class Dogs extends Component {
	render() {
		return (
			<div id="dogs" className="dogs">
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
				<h1 className="display-4">My Dogs</h1>
				<br />
				<p>
					<em>These are my dogs. There are many like them, but these are mine. <br />
					My dogs are my best friends. They are my life. I must master them as I must master my life. <br />
					Without me, my dogs are homeless. Without my dogs, my life is pointless. </em>
				</p>
				<div className="container">
					<nav id="dogs-navbar" className="navbar">
						<ul>
							<li><a href="#yoda">Yoda</a></li>
							<li><a href="#lola">Lola</a></li>
						</ul>
					</nav>
				</div>
				<div className="container dogs-carousel">
					<section id="yoda">
						<h3>Yoda</h3>
						<div id="yodaCarousel" className="carousel slide" data-ride="carousel">
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
					</section>
					<section id="lola">
						<h3>Lola</h3>
						<div className="container">
							<div id="lolaCarousel" className="carousel slide" data-ride="carousel">
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
					</section>
				</div>
				<br />
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
