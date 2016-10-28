/*
*		   Author:  	John Coty Embry
*	Last Modified:  	08/11/2016
*	 Date Created:  	08/09/2016
*/

import React from 'react';
import $ from 'jquery';

//todo: make the nav bars change colors for a few seconds when tapped on to make the website more touchscreen friendly

var NavbarTwo = React.createClass({
	getInitialState: function() {
		return {
			default: 'default'
		}
	},
	componentDidMount: function(e) {
		$(window).resize(this.adjustSize);
	},
	render: function() {
		// $.extend(parentNavbar, {
		// 	position: this.props.position === 'absolute' ? 'absolute' : '',		//for application.html
		// 	marginTop: typeof this.props.marginTop !== 'undefined' ? this.props.marginTop : '',	
		// 	paddingTop: this.props.doNotSetPadding === true ? 0 : parentNavbar.paddingTop,												//for application.html
		// 	paddingBottom: this.props.doNotSetPadding === true ? 0 : parentNavbar.paddingBottom												//for application.html
		// });
		return ( 
			<div id="parent-navbar-item" style={parentNavbar}>
				
					<div className='navbarTwoItem' style={navbarItem.one} onClick={this.onClickHome}>Home</div>
					<div className='navbarTwoItem' style={navbarItem.one} onClick={this.onClickHistory}>History</div>
					<div className='navbarTwoItem' style={navbarItem.one} onClick={this.onClickTribalAdministration}>Tribal Administration</div>
					<div className='navbarTwoItem' style={navbarItem.one} onClick={this.onClickApplication}>Application</div>
					<div className='navbarTwoItem' style={navbarItem.one} onClick={this.onClickBeliefs}>Beliefs</div>
					<div className='navbarTwoItem' style={navbarItem.oneA} onClick={this.onClickContact}>Contact Us</div>
					{/**/}
				
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
	},
	onClickTribalAdministration: function() {
		location = './tribaladministration.html'
	}
});
/*
*	todo: write a utility function that will convert back and forth
*	between percentages and pixels
*/
var parentNavbar = {
	//I'm going to assume that the browser is above - I suppose - 500px in width?? (apparently 1024 is the average number, so I'll try my best to include tablets)
	width: '100%',
	height: 45,
	// paddingTop: 15,
	// paddingBottom: 15,
	background: 'black',
	pointerEvents: 'none',
	display: 'inline-block'
	// height: '35px',
	// background: 'orange'
}
var navbarItem = {
	get one() {
		// var widthTS = (($(document.documentElement).outerWidth() * 0.80) / 6) + 'px';
		return {
			// width: (100/6.5) + '%',
			width: 'calc(16.67% - 2px)',
			height: '100%',
			// borderLeft: 'solid 2px brown',
			boxSizing: 'border-box',
			display: 'inline-block',
			// paddingRight: '15px',
			textAlign: 'center',
			pointerEvents: 'all',
			// color: 'white',
			margin: 0,
			cursor: 'pointer'
			// position: 'absolute'
		}
	},
	get oneA() {
		var widthTS = (($(document.documentElement).outerWidth() * 0.80) / 6) + 'px';
		return {
			//width: widthTS,
			height: '100%',
			boxSizing: 'border-box',
			display: 'inline-block',
			textAlign: 'center',
			// borderLeft: 'solid 2px brown',
			pointerEvents: 'all',
			// color: 'white',
			margin: 0,
			cursor: 'pointer'
		}
	},
	get two() {
		// var widthTS = (($(document.documentElement).outerWidth() * 0.80) / 6) + 'px';
		return {
			// width: (100/6.5) + '%',
			width: 'calc(16.67% - 2px)',
			height: '100%',
			// borderLeft: 'solid 2px brown',
			boxSizing: 'border-box',
			display: 'inline-block',
			// paddingRight: '15px',
			textAlign: 'center',
			pointerEvents: 'all',
			// color: 'white',
			margin: 0,
			// float: 'right'
			// position: 'absolute'
		}
	},
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

module.exports = NavbarTwo;
