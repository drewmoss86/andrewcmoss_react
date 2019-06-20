import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layouts/Header';

import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Dogs from './pages/Dogs';
import Contact from './pages/Contact';

import './App.css';

export default  class App extends Component {
  render() {
    return (
			<Router>
				<div className="App">
					<Header />	
					<div className="container">
						<Route exact path="/" component={Home}/>
						<Route path="/about" component={About} />
						<Route path="/work" component={Work} />
						<Route path="/dogs" component={Dogs} />
						<Route path="/contact" component={Contact} />
					</div>
				</div>
			</Router>
    );
  }

}
