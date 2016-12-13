import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

import Emblem from './components/Emblem.jsx';
import Navbar from './components/Navbar.jsx';
import TribalAdministration from './components/TribalAdministration.jsx';


$(document).ready(function() {


	ReactDOM.render(<Emblem />, document.getElementById('emblem'));
	ReactDOM.render(<Navbar fontSize={20} />, document.getElementById('navbar'));
	ReactDOM.render(<TribalAdministration />, document.getElementById('tribaladministration'));
})
