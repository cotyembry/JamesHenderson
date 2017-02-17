import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';

import $ from 'jquery';

import Application from './Components/Application.jsx';
import Beliefs from './Components/Beliefs.jsx';
import Contact from './Components/Contact.jsx';
import Emblem from './Components/Emblem.jsx';
import History from './Components/History.jsx';
import Home from './Components/Home.jsx';
import TribalAdministration from './Components/TribalAdministration.jsx';


	// ReactDOM.render(<Emblem />, document.getElementById('emblem'));
	// ReactDOM.render(<Home />, document.getElementById('root'));


// import Navbar from './Components/Navbar.jsx';

// ReactDOM.render(<Navbar />, document.getElementById('navbar'))
$(document).ready(function() {
	ReactDOM.render(<Emblem />, document.getElementById('emblem'))

	ReactDOM.render(
	  <Router history={hashHistory}>
	    <Route path="/" component={Home}/>
	    <Route path="/history" component={History}/>
	    <Route path="/administration" component={TribalAdministration}/>
	    <Route path="/application" component={Application}/>
	    <Route path="/beliefs" component={Beliefs}/>
	    <Route path="/contact" component={Contact}/>
	  </Router>,
	  document.getElementById('app')
	)
})
	    // <Route path="/about" component={About}/>
	    