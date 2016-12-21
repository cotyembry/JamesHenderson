/*
*		   Author:  John Coty Embry
*	 Date Created:  08/9/16
*	Last Modified:  12/09/16
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
import Application from './components/Application.jsx';


$(document).ready(function() {
	ReactDOM.render(<Emblem />, document.getElementById('emblem'));
	ReactDOM.render(<Application />, document.getElementById('root'));
});


// /*
// *		   Author:  John Coty Embry
// *	 Date Created:  9/17/16
// *	Last Modified:  9/17/16
// *
// *	Proverbs 3:5-6 (one of my favorites, go check it out)
// */

// import React from 'react';
// import ReactDOM from 'react-dom';

// import $ from 'jquery';

// import Emblem from './components/Emblem.jsx';
// // import Navbar from './components/Navbar.jsx';
// import Application from './components/Application.jsx';


// $(document).ready(function() {
// 	ReactDOM.render(<Emblem />, document.getElementById('emblem'));
// 	// ReactDOM.render(<Navbar doNotSetPadding={true} />, document.getElementById('navbar'));
// 	ReactDOM.render(<Application />, document.getElementById('application'));
// })
