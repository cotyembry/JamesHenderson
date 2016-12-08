/*
*		   Author:  John Coty Embry
*	 Date Created:  8/9/16
*	Last Modified:  8/11/16
*
*	Program comment: use this index file in conjunction with webpack
*	to generate the 'bundle.js file' that needs to be linked on the home.html
*	page (this file being created, rather than being called bundle.js, I am
*	calling it home.js since this name seems appropriate)
*
*	Proverbs 3:5-6 (one of my favorites, go check it out)
*/


import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Emblem from './components/Emblem.jsx';
// import Header from './components/Header.jsx';
// import Navbar from './components/Navbar.jsx';
// import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';


var home = {
	ready: function ready() {
		$(window).resize(home.adjustSize);
		//start the stuff necessary to do when the document has been loaded
		var widthToSet = $(document.documentElement).outerWidth();
		$('#page').css({ 'width': widthToSet + 'px' });

		EmblemObject.zoomChanged();
	},
	adjustSize: function adjustSize() {
		var widthToSet = $(document.documentElement).outerWidth();
		$('#page').css({ 'width': widthToSet + 'px' });
	}
}

// ReactDOM.render(<Emblem />, document.getElementById('emblem'));
// ReactDOM.render(<Header />, document.getElementById('header'));
// ReactDOM.render(<Navbar />, document.getElementById('navbar'));
// ReactDOM.render(<Footer />, document.getElementById('footer'));

$(document).ready(function() {
	ReactDOM.render(<Emblem />, document.getElementById('emblem'));
	ReactDOM.render(<Home />, document.getElementById('root'));
	
	home.ready();
});
