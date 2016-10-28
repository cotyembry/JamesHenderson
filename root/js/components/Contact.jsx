/*
*		   Author:  John Coty Embry
*	 Date Created:  8/9/16
*	Last Modified:  8/11/16
*/

import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './Navbar.jsx';

import $ from 'jquery';

var self;

export default class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = { marginLeft: 15 };
	}
	componentDidMount() {
		self = this;

		var totalWidth = $('#contact-root').outerWidth();
		if(styles.mapStyle.width < totalWidth) {
			var marginLeft = (totalWidth - styles.mapStyle.width) / 2;
		}
		else {
			var marginLeft = 15;
			console.error("Change style sheets to fit a smaller screen - or do something different")
		}
		$(window).resize(self.resize);
		this.setState({ marginLeft: marginLeft });
	}
	resize() {
		var totalWidth = $('#contact-root').outerWidth();
		if(styles.mapStyle.width < totalWidth) {
			var marginLeft = (totalWidth - styles.mapStyle.width) / 2;
		}
		else {
			var marginLeft = 15;
			console.error("Change style sheets to fit a smaller screen - or do something different")
		}
		self.setState({ marginLeft: marginLeft });
	}
	render() {
		//$.extend(styles.mapParent, { marginLeft: this.state.marginLeft })
		return (
			<div>
				<Navbar doNotSetPadding={true} />
				<div id="contact-root" style={styles.contactRoot}>
					<h1 style={styles.h1}>Contact Us!</h1>
						<div id="google-map" style={styles.mapParent, { marginLeft: this.state.marginLeft }}>
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.445493348869!2d-93.15553778507295!3d35.22027866272146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cc544b72349d3b%3A0x46c7a963a17e55fe!2s115+Locust+St%2C+Dardanelle%2C+AR+72834!5e0!3m2!1sen!2sus!4v1474150689754" allowFullScreen style={styles.mapStyle}></iframe>
						</div>
				</div>
			</div>
		)
	}
}

// class ContactPage extends React.Component {
// 	render() {
// 		return (
// 			<div id="contact-page" style={styles.contactPage}>
				
// 			</div>
// 		)
// 	}
// }


var styles = {
	contactRoot: {
		width: '100%',
		height: 1000,
		top: 350,
		background: 'white'
	},
	mapParent: {
		display: 'inline-block'//,
		// marginLeft: '100px',
		// marginRight: 'auto'
	},
	mapStyle: {
		width: 600,
		height: 450,
		frameBorder: 0,
		border: 0//,
		// marginLeft: 'auto',
		// marginRight: 'auto'
	},
	h1: {
		color: 'black',
		margin: 0,
		padding: 0
	}
}

