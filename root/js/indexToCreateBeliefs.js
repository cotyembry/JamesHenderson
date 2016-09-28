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
import Beliefs from './components/Beliefs.jsx';


ReactDOM.render(<Emblem />, document.getElementById('emblem'));
ReactDOM.render(<Beliefs />, document.getElementById('beliefs'));
