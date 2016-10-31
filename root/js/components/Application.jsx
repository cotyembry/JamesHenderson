import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './Navbar.jsx';

import $ from 'jquery';

export default class Application extends React.Component {
	componentDidMount() {
		//$('#application').css({ display: 'block' })
	}
	render() {
		return (
			<div style={styles.application}>
				<Navbar doNotSetPadding={true} />
				<center style={styles.paddingTop}>Click <a href="" style={styles.a}>here</a> for an application (opens in a new tab).</center>
			</div>
		)
	}
}

var styles = {
	a: {
		cursor: 'pointer'
	},
	application: {
		width: '100%',
		height: 1000,
		fontSize: 20,
		marginTop: 30
	},
	paddingTop: {
		paddingTop: 15
	}
}
