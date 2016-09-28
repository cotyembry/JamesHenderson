/*
*		   Author:  John Coty Embry
*	 Date Created:  9/17/16
*	Last Modified:  9/17/16
*
*	Proverbs 3:5-6 (one of my favorites, go check it out)
*/

import React from 'react';
import ReactDOM from 'react-dom';

import Contact from './components/Contact.jsx';
import Emblem from './components/Emblem.jsx';


ReactDOM.render(<Emblem />, document.getElementById('emblem'));
ReactDOM.render(<Contact />, document.getElementById('contact'));
