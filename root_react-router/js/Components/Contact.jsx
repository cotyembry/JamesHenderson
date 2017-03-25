/*
*		   Author:  John Coty Embry
*	 Date Created:  8/9/16
*	Last Modified:  8/11/16
*/

import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './Navbar.jsx';
// import EmailForm from './EmailForm.jsx';							//coty commented out 03-24-2017
// import EmailForm from './EmailForm_staticWebpageVersion.jsx';	//coty added but kept commented for reference 03-24-2017
import EmailForm from './EmailForm_serverSideLogicRequired.jsx';



import StaticEmailForm from './StaticEmailForm.jsx';




import LoadingIcon from './LoadingIcon1.jsx';

import $ from 'jquery';

var self;

export default class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			marginLeft: 15,
			loadingDisplay: {
				marginTop: 50,
				display: 'none'
			},
			iframeVisibility: {
				visibility: 'hidden'
			}
		}
	}
	componentDidMount() {
		self = this;

		$('#mapiframe').on('load', self.iframeLoaded.bind(self));

		this.window = window;

		var totalWidth = $('#page').outerWidth();
		if(styles.mapStyle.width < totalWidth) {
			var marginLeft = (totalWidth - styles.mapStyle.width) / 2;
		}
		else {
			var marginLeft = 15;
			// console.error("Change style sheets to fit a smaller screen - or do something different")
		}


		//start Coty added 12-21-2016
		this.mapWidth = $('#google-map').outerWidth();	//save this value for later to compare and see if I need to update the value
		//and safely set the container element's width for the first time before doing it again possibly later in the resize event
		if(typeof this.mapWidth !== 'undefined' && this.mapWidth != 0) {
			$('#container').css({ width: this.mapWidth});
		}
		//end


		$(window).resize(self.resize.bind(self));
		this.setState({ marginLeft: marginLeft });

		this.resize();
	}

	iframeLoaded() {
		//hide the loading icon
		$('#bubblingContainer').css({ display: 'none' });

		this.setState({
			iframeVisibility: {
				visibility: 'visible'
			}
		});
	}

	resize() {
		var outerWidth = window.document.documentElement.clientWidth;
		var totalWidth = $('#page').outerWidth();
		if(styles.mapStyle.width < totalWidth) {
			var marginLeft = (totalWidth - styles.mapStyle.width) / 2;
		}
		else {
			var marginLeft = 15;
		}


		//start Coty added 12-21-2016
		var mapWidth = $('#google-map').outerWidth();

		if(mapWidth != this.mapWidth) {
			//if here the value has changed
			//store and set the new value to the containers width
			$('#container').css({ width: mapWidth});
			//also make sure to store the value for later
			this.mapWidth = mapWidth;
		}
		else {
			//do nothing
		}

		//end

		var smallestWidthPossible = $('#container').outerWidth();

		//finally I need to make sure that having the width as 100% doesnt let the element get too small
		if(outerWidth > smallestWidthPossible) {
			$('#page').css({ width: '100%' });

			// $('#emblem-element').css({ width: '100%' });
			$('#fontHeader').css({ width: '100%' });
			// EmblemObject.locked = false;
		}
		else if(outerWidth <= smallestWidthPossible) {
			$('#page').css({ width: smallestWidthPossible });

			// $('#emblem-element').css({ width: smallestWidthPossible });
			$('#fontHeader').css({ width: smallestWidthPossible });
			// EmblemObject.locked = true;
		}

		self.setState({ marginLeft: marginLeft });
	}
	render() {
		// $.extend(styles.mapParent, { marginLeft: this.state.marginLeft })
		var tempStyle = styles.mapParent;
		$.extend(tempStyle, { marginLeft: this.state.marginLeft });

		return (
			<div>
				<div id="page" style={styles.page}>
					
					<Navbar fontSize={20} />
					
					<div style={styles.fontSizeHelper} id="content">
						<center>
							<div style={styles.container} id="container">


								<div id="address"  style={styles.fontSizeHelper}>
									<p style={styles.pElement}>Tribal Office</p>

									<p style={styles.pElement}>115 Locust St.</p>

									<p style={styles.lastPElement}>Dardanelle, AR 72834</p>

								</div>
							</div>
						</center>


					</div>


					<LoadingIcon />
					
					<div id="google-map" style={tempStyle}>
						
						<iframe id="mapiframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.445493348869!2d-93.15553778507295!3d35.22027866272146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cc544b72349d3b%3A0x46c7a963a17e55fe!2s115+Locust+St%2C+Dardanelle%2C+AR+72834!5e0!3m2!1sen!2sus!4v1474150689754" allowFullScreen style={Object.assign(styles.mapStyle, this.state.iframeVisibility)}></iframe>
					</div>



					<center style={styles.paddingBottom}><h1 style={styles.h1}>Contact Us!</h1></center>


					<center style={styles.emailFormParent}>
						<div style={styles.emailCaption}>
							To send us an email, enter in the subject and write your message below:
						</div>

						{/*<StaticEmailForm /><EmailForm /> Coty commented out 02-17-2017 */}
						{/*<a style={styles.a} href = 'mailto:cotyembry@gmail.com?subject=Contact Sovereign Chickamauga Cherokee'><span style={styles.link}>Click Here</span> (this opens your mail app)</a>
						<a style={styles.a} href = 'mailto:CHIEFAMCKAY@gmail.com?subject=Contact Sovereign Chickamauga Cherokee'><span style={styles.link}>Click Here</span> (this opens your mail app)</a>


						*/}
						<EmailForm /> {/* coty added 03-24-2017 */}

						<div style={styles.emailCaptionEnding}>
							Or send it directly at <span style={styles.span}>CHIEFAMCKAY@gmail.com</span>
						</div>
					</center>


				</div>
			</div>
		)
	}

	sendMailMethod() {


		// var sendmail = require('sendmail')();
	 
		// sendmail({
		//     from: 'no-reply@yourdomain.com',
		//     to: 'cotyembry@gmail.com, cotyembry@live.com',
		//     subject: 'test sendmail',
		//     html: 'Mail of test sendmail ',
		//   }, function(err, reply) {
		//     console.log(err && err.stack);
		//     console.dir(reply);
		// });


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
	a: {
		color: 'white',
		cursor: 'pointer',
		fontSize: 20
	},
	page: {
		width: '100%',
		// height: 1000,
		// top: 350,
		zIndex: 2,			//the Emblem.jsx Component returns the logo and all set with zIndex: 1 so to keep that Component from overlapping over the top of the content, this zIndex: 2 is needed
		background: 'white',
		marginTop: 425,
		paddingBottom: 50,
		position: 'absolute',
		background: '#d9d9d9',
		background: '-moz-linear-gradient(#d9d9d9, #000)',
		background: '-webkit-linear-gradient(#d9d9d9, #000)',
		background: '-o-linear-gradient(#d9d9d9, #000)',
		background: '-ms-linear-gradient(#d9d9d9, #000)',/*For IE10*/
		background: 'linear-gradient(#d9d9d9, #000)',
		filter: "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#ffffff', endColorstr='#000000')"/*For IE7-8-9*/
	},
	container: {
		padding: 15,
	    marginTop: 20,
	    marginBottom: 30,
	    borderRadius: 0,
	    backgroundColor: '#FFF',
	    boxShadow: '0 2px 2px 0 rgba(0,0,0,.16),0 0 2px 0 rgba(0,0,0,.12)'
	},
	emailCaption: {
		color: 'white',
		fontSize: 25,
		marginBottom: 10
	},
	emailCaptionEnding: {
		color: 'white',
		fontSize: 18,
		marginTop: 10,
		marginBottom: 10
	},
	emailFormParent: {
		width: '100%'
	},
	fontSizeHelper: {
		fontSize: 30
	},
	link: {
		color: '#4db8ff'
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
	paddingBottom: {
		paddingBottom: 15
	},
	pElement: {
		marginTop: 5,
		marginBottom: 5
	},
	lastPElement: {
		marginTop: 5,
		marginBottom: 20
	},
	h1: {
		color: 'white',
		margin: 0,
		marginTop: 30,
		padding: 0
	},
	span: {
		// color: '#4db8ff'
	}
}

//I'll use this to give EmailForm.jsx access to the variable
window.mapStyle = styles.mapStyle;
