/*
*		   Author:  John Coty Embry
*	 Date Created:  10/17/2016
*	Last Modified:  10/17/2016
*
*	Proverbs 3:5-6 (one of my favorites, go check it out)
*/


import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import NavbarTwo from './components/NavbarTwo.jsx';
import History from './components/History.jsx';
// import HistoryBackground from './components/History.jsx';




$(document).ready(function() {



	ReactDOM.render(<NavbarTwo />, document.getElementById('navbartwo'));
	ReactDOM.render(<History />, document.getElementById('history'));
	// ReactDOM.render(<Home />, document.getElementById('root'));
});



