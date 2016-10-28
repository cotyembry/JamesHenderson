import React from 'react'
import ReactDOM from 'react-dom'

import $ from 'jquery'


import Navbar from './components/Navbar.jsx'
import TribalAdministration from './components/TribalAdministration.jsx'


$(document).ready(function() {

	ReactDOM.render(<Navbar />, document.getElementById('navbar'))
	ReactDOM.render(<TribalAdministration />, document.getElementById('tribaladministration'))
})
