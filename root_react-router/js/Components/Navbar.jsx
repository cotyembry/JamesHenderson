/*
*		   Author:  	John Coty Embry
*	Last Modified:  	08/11/2016
*	 Date Created:  	08/09/2016
*/

import React from 'react';

import { Link } from 'react-router';

import $ from 'jquery';

//todo: make the nav bars change colors for a few seconds when tapped on to make the website more touchscreen friendly

var Navbar = React.createClass({
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
	componentDidMount: function(e) {

		$(window).resize(this.adjustSize);

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
		$.extend(parentNavbar, {
			position: this.props.position === 'absolute' ? 'absolute' : '',		//for application.html
			marginTop: typeof this.props.marginTop !== 'undefined' ? this.props.marginTop : '',	
			paddingTop: this.props.doNotSetPadding === true ? '' : parentNavbar.paddingTop,												//for application.html
			paddingBottom: this.props.doNotSetPadding === true ? '' : parentNavbar.paddingBottom,											//for application.html
			fontSize: typeof this.props.fontSize === 'undefined' ? '' : this.props.fontSize												//for application.html
		});

		 // onClick={this.onClickTribalAdministration} onClick={this.onClickHistory} onClick={this.onClickHome}onClick={this.onClickContact} onClick={this.onClickApplication} onClick={this.onClickBeliefs}
		return ( 
			<div id="parent-navbar-item" style={parentNavbar}>
				<center>
					<Link className="navbar-item" id="1-navbar-item"  style={navbarItem.one} to="/">Home</Link>
					<Link className="navbar-item" id="2-navbar-item"  style={navbarItem.one} to="/history">History</Link>
					<Link className="navbar-item" id="3-navbar-item"  style={navbarItem.one} to="/administration">Tribal Administration</Link>
					<Link className="navbar-item" id="4-navbar-item"  style={navbarItem.one} to="/application">Application</Link>
					<Link className="navbar-item" id="5-navbar-item"  style={navbarItem.one} to="/beliefs">Beliefs</Link>
					<Link className="navbar-item" id="6-navbar-item"  style={navbarItem.oneA} to="/contact">Contact Us</Link>
				</center>
			</div>
		)
	},
	adjustSize: function() {
		this.setState({ default: 'default' })
	},
	onClickApplication: function() {
		//Coty commented out the line below and removed the .html part from it on 12_23_2016
		//I'm converting this webpack-dev-server to be used as an express app so the .html
		//is no longer needed. Instead the express router will handle this routing on the
		//server side

		//note: in the future when you want to develop on this code base again on the
		//webpack-dev-server you will need to flip the comment of these statements to
		//bring back the location = '*.html' code

		// location = './application.html';
		
		//TODO: this is going to be harder to implement than I thought...
		//first remove the class from the element (where ever it is...and then add the class to this particular element)
		// $('.active').each(function() {
		// 	$(this).removeClass('active');
		// });
		// $('#4-navbar-item').addClass('active');

		location = './application';
	},
	onClickContact: function() {
		//Coty commented out the line below and removed the .html part from it on 12_23_2016
		//I'm converting this webpack-dev-server to be used as an express app so the .html
		//is no longer needed. Instead the express router will handle this routing on the
		//server side

		//note: in the future when you want to develop on this code base again on the
		//webpack-dev-server you will need to flip the comment of these statements to
		//bring back the location = '*.html' code

		// location = './contact.html';
		
		//TODO: this is going to be harder to implement than I thought...
		//first remove the class from the element (where ever it is...and then add the class to this particular element)
		// $('.active').each(function() {
		// 	$(this).removeClass('active');
		// });
		// $('#6-navbar-item').addClass('active');

		location = './contact';
	},
	onClickHome: function() {
		//Coty commented out the line below and removed the .html part from it on 12_23_2016
		//I'm converting this webpack-dev-server to be used as an express app so the .html
		//is no longer needed. Instead the express router will handle this routing on the
		//server side

		//note: in the future when you want to develop on this code base again on the
		//webpack-dev-server you will need to flip the comment of these statements to
		//bring back the location = '*.html' code

		// location = './index.html';
		
		//TODO: this is going to be harder to implement than I thought...
		//first remove the class from the element (where ever it is...and then add the class to this particular element)
		// $('.active').each(function() {
		// 	$(this).removeClass('active');
		// });
		// $('#1-navbar-item').addClass('active');

		location = '/';
	},
	onClickHistory: function() {
		//Coty commented out the line below and removed the .html part from it on 12_23_2016
		//I'm converting this webpack-dev-server to be used as an express app so the .html
		//is no longer needed. Instead the express router will handle this routing on the
		//server side

		//note: in the future when you want to develop on this code base again on the
		//webpack-dev-server you will need to flip the comment of these statements to
		//bring back the location = '*.html' code

		// location = './history.html';
		
		//TODO: this is going to be harder to implement than I thought...
		//first remove the class from the element (where ever it is...and then add the class to this particular element)
		// $('.active').each(function() {
		// 	$(this).removeClass('active');
		// });
		// $('#2-navbar-item').addClass('active');

		location = './history';
	},
	onClickBeliefs: function() {
		//Coty commented out the line below and removed the .html part from it on 12_23_2016
		//I'm converting this webpack-dev-server to be used as an express app so the .html
		//is no longer needed. Instead the express router will handle this routing on the
		//server side

		//note: in the future when you want to develop on this code base again on the
		//webpack-dev-server you will need to flip the comment of these statements to
		//bring back the location = '*.html' code

		// location = './beliefs.html';
		
		//TODO: this is going to be harder to implement than I thought...
		//first remove the class from the element (where ever it is...and then add the class to this particular element)
		// $('.active').each(function() {
		// 	$(this).removeClass('active');
		// });
		// $('#5-navbar-item').addClass('active');

		location = './beliefs';
	},
	onClickTribalAdministration: function() {
		//Coty commented out the line below and removed the .html part from it on 12_23_2016
		//I'm converting this webpack-dev-server to be used as an express app so the .html
		//is no longer needed. Instead the express router will handle this routing on the
		//server side

		//note: in the future when you want to develop on this code base again on the
		//webpack-dev-server you will need to flip the comment of these statements to
		//bring back the location = '*.html' code

		// location = './tribaladministration.html'
		
		//TODO: this is going to be harder to implement than I thought...
		//first remove the class from the element (where ever it is...and then add the class to this particular element)
		// $('.active').each(function() {
		// 	$(this).removeClass('active');
		// });
		// $('#3-navbar-item').addClass('active');

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
	}
}

// var divStyle = {
//   color: 'white',
//   backgroundImage: 'url(' + imgUrl + ')',
//   WebkitTransition: 'all', // note the capital 'W' here
//   msTransition: 'all' // 'ms' is the only lowercase vendor prefix
// };

// ReactDOM.render(<div style={divStyle}>Hello World!</div>, mountNode);

module.exports = Navbar;
