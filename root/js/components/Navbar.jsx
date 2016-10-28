/*
*		   Author:  	John Coty Embry
*	Last Modified:  	08/11/2016
*	 Date Created:  	08/09/2016
*/

import React from 'react';
import $ from 'jquery';

//todo: make the nav bars change colors for a few seconds when tapped on to make the website more touchscreen friendly

var Navbar = React.createClass({
	getInitialState: function() {
		return {
			default: 'default'
		}
	},
	componentDidMount: function(e) {

		$(window).resize(this.adjustSize)
	},
	render: function() {
		$.extend(parentNavbar, {
			position: this.props.position === 'absolute' ? 'absolute' : '',		//for application.html
			marginTop: typeof this.props.marginTop !== 'undefined' ? this.props.marginTop : '',	
			paddingTop: this.props.doNotSetPadding === true ? 0 : parentNavbar.paddingTop,												//for application.html
			paddingBottom: this.props.doNotSetPadding === true ? 0 : parentNavbar.paddingBottom												//for application.html
		});
		return ( 
			<div id="parent-navbar-item" style={parentNavbar}>
				<center>
					<div className="navbar-item" id="1-navbar-item"  style={navbarItem.one} onClick={this.onClickHome}>Home</div>
					<div className="navbar-item" id="2-navbar-item"  style={navbarItem.one} onClick={this.onClickHistory}>History</div>
					<div className="navbar-item" id="3-navbar-item"  style={navbarItem.one}>Tribal Administration</div>
					<div className="navbar-item" id="4-navbar-item"  style={navbarItem.one} onClick={this.onClickApplication}>Application</div>
					<div className="navbar-item" id="5-navbar-item"  style={navbarItem.one} onClick={this.onClickBeliefs}>Beliefs</div>
					<div className="navbar-item" id="6-navbar-item"  style={navbarItem.oneA} onClick={this.onClickContact}>Contact Us</div>
				</center>
			</div>
		)
	},
	adjustSize: function() {
		this.setState({ default: 'default' })
	},
	onClickApplication: function() {
		location = './application.html';
	},
	onClickContact: function() {
		location = './contact.html';
	},
	onClickHome: function() {
		location = './index.html';
	},
	onClickHistory: function() {
		location = './history.html';
	},
	onClickBeliefs: function() {
		location = './beliefs.html';
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

// var divStyle = {
//   color: 'white',
//   backgroundImage: 'url(' + imgUrl + ')',
//   WebkitTransition: 'all', // note the capital 'W' here
//   msTransition: 'all' // 'ms' is the only lowercase vendor prefix
// };

// ReactDOM.render(<div style={divStyle}>Hello World!</div>, mountNode);

module.exports = Navbar;
