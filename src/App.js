import React, { Component } from 'react';
import { BrowserRouter as BRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
// import Smooth from './assets/smooth';
import FlyIn from './assets/animation';


import Home from './components/pages/Home';
import About from './components/pages/About';
import Work from './components/pages/Work';
import Dogs from './components/pages/Dogs';
import Yoda from './components/dogs/Yoda';
import Lola from './components/dogs/Lola';
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
						{/* <Route exact path="/" component={Home}/>	
						<Route path="#about" component={About} />
						<Route path="#work" component={Work} />
						<Route path="#dogs" component={Dogs} />
						<Route path="#contact" component={Contact} /> */}
						{/* <Link path="/log" component={Log} />
						<Link path="/addLog" component={AddLog} /> */}
						{/* <Link path="/logItem" component={LogItem} /> */}
						<Home />
						<About />
						<Work />
						<Dogs />
							<Yoda />
							<Lola />
						<Contact />
					</div>
				</div>
			</BRouter>
    );
  }

}