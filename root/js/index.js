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
import PDF from './Components/PDF.jsx';
import TribalAdministration from './Components/TribalAdministration.jsx';


$(document).ready(function() {
	window.store = {
		_pageLocation: '',
		set pageLocation(locationThatWasJustSet) {		//coty added pageLocation 03-24-2017. Every single component (that is a main page i.e. Home.jsx, Beliefs.jsx) will set this state property in their componentDidMount method
			// console.log(locationThatWasJustSet)
			
			//update the value inside the store so that I can get it later
			window.store._pageLocation = locationThatWasJustSet;
			//window.updatePageLocation is defined in Navbar.jsx - it exposes this method to allow its internal state to be updated
			window.updatePageLocation(locationThatWasJustSet);
		}
	}

	ReactDOM.render(<Emblem />, document.getElementById('emblem'))

	ReactDOM.render(
	  <Router history={hashHistory}>
	    <Route path="/" component={Home} />
	    <Route path="/history" component={History} />
	    <Route path="/administration" component={TribalAdministration} />
	    <Route path="/application" component={Application} />
	    <Route path="/beliefs" component={Beliefs} />
	    <Route path="/contact" component={Contact} />
	    <Route path="/assets/application_final.pdf" component={PDF} />
	    <Route path="*" component={Home} />
	  </Router>,
	  document.getElementById('app')
	)
})
	    