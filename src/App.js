import React, { Component } from 'react';
import { BrowserRouter as BRouter, Route, HashRouter as HRouter } from 'react-router-dom';

import Navbar from './components/Header';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Work from './components/pages/Work';
import Dogs from './components/pages/Dogs';
import Log from './components/pages/Log';
import Contact from './components/pages/Contact';

import AddLog from './components/logs/AddLog';
import LogItem from './components/logs/LogItem';

import './App.css';

export default  class App extends Component {	
  render() {
    return (
			<BRouter>
				<div className="App">
					<div className="content">
						<Navbar />
						<Route exact path="/" component={Home}/>	
						<Route path="/about" component={About} />
						<Route path="/work" component={Work} />
						<Route path="/log" component={Log} />
						<Route path="/addLog" component={AddLog} />
						<Route path="/logItem" component={LogItem} />
						<Route path="/dogs" component={Dogs} />
						<Route path="/contact" component={Contact} />
					</div>
				</div>
			</BRouter>
    );
  }

}