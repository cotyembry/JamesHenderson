/*
*		   Author:  	John Coty Embry
*	Last Modified:  	08/11/2016
*	 Date Created:  	08/09/2016
*/

import React from 'react';
import { findDOMNode } from 'react-dom';

import { Link } from 'react-router';

import $ from 'jquery';

//todo: make the nav bars change colors for a few seconds when tapped on to make the website more touchscreen friendly

var Navbar = React.createClass({
	pageLocationHelper: function(pageLocationThatWasJustSet) {
		// //first I will erase the current state
		// let keys = Object.keys(this.state.pageLocation);
		this.setState({
			pageLocation: pageLocationThatWasJustSet
		})
	},
	addHoverEvent: function(navbarItem) {
		//TODO: maybe change the color of the narbar Item to be #F9EF1A (its yellowish) since it goes more with the Emblem.jsx theme
		$(navbarItem).hover(
			//handlerIn
			function() {
				$(this).css({ backgroundColor: '#cc8500' });
			},
			//handlerOut
			function() {
				$(this).css({ backgroundColor: 'rgb(230, 149, 0)' });
			}
		)	
	},
	getInitialState: function() {
		return {
			default: 'default'
		}
	},
	componentWillMount: function() {
		this.refs = [];
		this.refs['navbarItem'] = [];

		this.refs['home'] = '';
		this.refs['history'] = '';
		this.refs['administration'] = '';
		this.refs['application'] = '';
		this.refs['beliefs'] = '';
		this.refs['contact'] = '';
	},
	componentDidMount: function(e) {
		//pageLocationHelper is passed in to allow updating to the UI when the user navigates to another component
		window.updatePageLocation = this.pageLocationHelper;

		// $(window).resize(this.adjustSize);

		// I will finish this logic later when I have more time
		

		/*
		//Coty added 01-13-2017
		//now to add a style to the background
		//styles.navbarItemActive
		//depending on the page is going to depend on what element has the inline style for the backgroundColor
		//1. figure out the path
		var path = location.toString().split('/')[3];	//if home this should equal '' to be true
		//2. remove all inline-styles
		$('.navbar-item').each(function() {
			//let the css stylesheet take over for the css style by removing the inline-style
			$(this).css({backgroundColor: ''}).removeClass('activeItem');
		});

		//3. add the class back to the appropriate navbar-item and also add the inline-style
		if(path == '') {
			var navbarItem = $('#1-navbar-item')[0];
			$(navbarItem).css(styles.navbarItemActive).addClass('activeItem');
			this.addHoverEvent(navbarItem);
		}
		else if(path.search(/history/gi) != -1) {
			var navbarItem = $('#2-navbar-item')[0];
			$(navbarItem).css(styles.navbarItemActive).addClass('activeItem');
			this.addHoverEvent(navbarItem);
		}
		else if(path.search(/tribaladministration/gi) != -1) {
			var navbarItem = $('#3-navbar-item')[0];
			$(navbarItem).css(styles.navbarItemActive).addClass('activeItem');
			this.addHoverEvent(navbarItem);
		}
		else if(path.search(/application/gi) != -1) {
			var navbarItem = $('#4-navbar-item')[0];
			$(navbarItem).css(styles.navbarItemActive).addClass('activeItem');
			this.addHoverEvent(navbarItem);
		}
		else if(path.search(/beliefs/gi) != -1) {
			var navbarItem = $('#5-navbar-item')[0];
			$(navbarItem).css(styles.navbarItemActive).addClass('activeItem');
			this.addHoverEvent(navbarItem);
		}
		else if(path.search(/contact/gi) != -1) {
			var navbarItem = $('#6-navbar-item')[0];
			$(navbarItem).css(styles.navbarItemActive).addClass('activeItem');
			this.addHoverEvent(navbarItem);
		}
		else {
			console.log('in Navbar.jsx: issues will occur if the code gets here')
		}
		*/




		// if(path == '') {
		// 	//add the style
		// 	styles.navbarItemActive
		// }

		// if(location.path.search(/\/|''/gi)) {
		// 	alert('true');
		// }
		// else {
		// 	alert('false')
		// }





		//after the above logic is written I need to make sure to have the styling work correctly
		//i.e. for the mousedown I want the color of the element to change to give the feel of pressing a button
		// $()





	},
	render: function() {
		// $.extend(parentNavbar, {
		// 	position: this.props.position === 'absolute' ? 'absolute' : '',		//for application.html
		// 	marginTop: typeof this.props.marginTop !== 'undefined' ? this.props.marginTop : '',	
		// 	paddingTop: this.props.doNotSetPadding === true ? '' : parentNavbar.paddingTop,												//for application.html
		// 	paddingBottom: this.props.doNotSetPadding === true ? '' : parentNavbar.paddingBottom,											//for application.html
		// 	fontSize: typeof this.props.fontSize === 'undefined' ? '' : this.props.fontSize												//for application.html
		// });


		var _styles = {}

		//here I override the default styles of parentNavbar
		_styles.parentNavbar = {
			...parentNavbar,
			position: this.props.position === 'absolute' ? 'absolute' : '',
			marginTop: typeof this.props.marginTop !== 'undefined' ? this.props.marginTop : '',	
			paddingTop: this.props.doNotSetPadding === true ? '' : parentNavbar.paddingTop,												//for application.html
			paddingBottom: this.props.doNotSetPadding === true ? '' : parentNavbar.paddingBottom,											//for application.html
			fontSize: typeof this.props.fontSize === 'undefined' ? '' : this.props.fontSize
		}

		//now to override the styles for the pageLocation
		let keys = Object.keys(this.refs);
		keys.map((key) => {
			if(key !== 'navbarItem') {
				if(key === window.store._pageLocation) {
					_styles[key] = { backgroundColor: '#BB1C23' }
				}
				else {
					_styles[key] = { backgroundColor: '' }
				}
			}
		})


		return ( 
			<div id="parent-navbar-item" style={_styles.parentNavbar}>
				<center>
					<div style={styles.navbarWrapper}>
						<Link ref={(ref) => { this.refs['navbarItem'].push(ref); this.refs['home'] = ref; }} className="navbar-item home" id="1-navbar-item"  style={{...navbarItem.one, ..._styles.home}} to="/">Home</Link>
						<Link ref={(ref) => { this.refs['navbarItem'].push(ref); this.refs['history'] = ref; }} className="navbar-item history" id="2-navbar-item"  style={{...navbarItem.one, ..._styles.history}} to="/history">History</Link>
						<Link ref={(ref) => { this.refs['navbarItem'].push(ref); this.refs['administration'] = ref; }} className="navbar-item administration" id="3-navbar-item"  style={{...navbarItem.one, ..._styles.administration}} to="/administration">Tribal Administration</Link>
						<Link ref={(ref) => { this.refs['navbarItem'].push(ref); this.refs['application'] = ref; }} className="navbar-item application" id="4-navbar-item"  style={{...navbarItem.one, ..._styles.application}} to="/application">Application</Link>
						<Link ref={(ref) => { this.refs['navbarItem'].push(ref); this.refs['beliefs'] = ref; }} className="navbar-item beliefs" id="5-navbar-item"  style={{...navbarItem.one, ..._styles.beliefs}} to="/beliefs">Beliefs</Link>
						<Link ref={(ref) => { this.refs['navbarItem'].push(ref); this.refs['contact'] = ref; }} className="navbar-item contact" id="6-navbar-item"  style={{...navbarItem.one, ..._styles.contact}} to="/contact">Contact Us</Link>
					</div>
				</center>
			</div>
		)
	},
	adjustSize: function() {
		// this.setState({ default: 'default' })
	},
	onClickApplication: function() {
		location = './application';
	},
	onClickContact: function() {
		location = './contact';
	},
	onClickHome: function() {
		location = '/';
	},
	onClickHistory: function() {
		location = './history';
	},
	onClickBeliefs: function() {
		location = './beliefs';
	},
	onClickTribalAdministration: function() {
		location = './tribaladministration';
	}
});
/*
*	todo: write a utility function that will convert back and forth
*	between percentages and pixels
*/
var parentNavbar = {
	//I'm going to assume that the browser is above - I suppose - 500px in width?? (apparently 1024 is the average number, so I'll try my best to include tablets)
	width: '100%',
	paddingTop: 15,
	paddingBottom: 15,
	background: 'rgba(0,0,0,0)',
	pointerEvents: 'none'
	// height: '35px',
	// background: 'orange'
}
var navbarItem = {
	get one() {
		var widthTS = (($(document.documentElement).outerWidth() * 0.80) / 6) + 'px';
		return {
			//width: widthTS,
			height: '35px',
			borderLeft: 'solid 2px brown',
			boxSizing: 'border-box',
			display: 'inline-block',
			paddingRight: '15px',
			textAlign: 'center',
			pointerEvents: 'all',
			color: 'white'
		}
	},
	get oneA() {
		var widthTS = (($(document.documentElement).outerWidth() * 0.80) / 6) + 'px';
		return {
			//width: widthTS,
			height: '35px',
			boxSizing: 'border-box',
			display: 'inline-block',
			textAlign: 'center',
			borderLeft: 'solid 2px brown',
			pointerEvents: 'all',
			color: 'white'
		}
	}
}

var lastChild = {
	width: (100/6) + '%',
	height: '100%'
}

var styles = {
	navbarItemActive: {
		backgroundColor: '#e69500'
	},
	navbarWrapper: {
		marginRight: '10px',
		marginLeft: '10px',
		display: 'inline-block',
		boxShadow: '1px 1px 10px white, 7px 7px 10px black'
	}
}


module.exports = Navbar;
