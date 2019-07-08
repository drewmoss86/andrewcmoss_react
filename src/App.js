import React, { Component } from 'react';
import { BrowserRouter as BRouter } from 'react-router-dom';

import Navbar from './components/Header';
// import Smooth from './assets/smooth';
import FlyIn from './assets/animation';
import ContactScript from './assets/autoformat-phone';
import Collapse from './assets/navCollapse';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Work from './components/pages/Work';
import Dogs from './components/pages/Dogs';
import Contact from './components/pages/Contact';

/** TODO: Add blog feature */
// import Log from './components/pages/Logs';
// import AddLog from './components/logs/AddLog';
// import LogItem from './components/logs/LogItem';

import './App.css';

export default  class App extends Component {	
  render() {
    return (
			<BRouter>
				<div className="App">
					<div className="content">
						<Navbar />
						<Home />
						<About />
						<Work />
						<Dogs />
						<Contact />
					</div>
				</div>
			</BRouter>
    );
  }

}