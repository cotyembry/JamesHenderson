/*
*		   Author:  John Coty Embry
*	 Date Created:  9/17/16
*	Last Modified:  9/17/16
*
*	Proverbs 3:5-6 (one of my favorites, go check it out)
*/

import React from 'react';
import ReactDOM from 'react-dom';

import Emblem from './components/Emblem.jsx';
import Navbar from './components/Navbar.jsx';
import Application from './components/Application.jsx';


ReactDOM.render(<Emblem />, document.getElementById('emblem'));
ReactDOM.render(<Navbar doNotSetPadding={true} />, document.getElementById('navbar'));
ReactDOM.render(<Application />, document.getElementById('application'));
