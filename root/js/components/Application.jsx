import React from 'react';

import $ from 'jquery';

// import Emblem from './Emblem.jsx';
import Header from './Header.jsx';
import Navbar from './Navbar.jsx';


export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.elements= [];
		this.totalFontWidth= 0;
		this.smallestWidthPossible= 445;
	}
	componentDidMount() {
		//this is exposed in index.js
		window.store.pageLocation = 'application';

		
		// let self = this; //self helps me with not conflicting with jquery's `this` in the code later on

		// //this resets the css style in case it was changed by another component
		// $('#emblem-element').css({ width: widthToSet + 'px', height: 350 });
		

		// $('#emblem-element').css({ width: '100%', height: 350 });


		//here I will set the page's width (TODO: convert this to use strictly this.state)
		// var widthToSet = $(document.documentElement).outerWidth();
		// $('#page').css({ 'width': widthToSet + 'px' });

		

		// Coty commented out the below 12-21-2016 since I am moving the fancy font header to the Emblem.jsx file
		//
		// //added the following lines to set the position of the font header
		// var fontHeaderHeight = $('#fontText1').outerHeight();
		// $('#fontHeader').css('top', '-' + fontHeaderHeight + 'px');
		//
		// //this helps me know what the total width of the font header is before its changed to display: block messing with the width values later
		// var fontText1 = $('#fontText1').outerWidth();
		// var fontText2 = $('#fontText2').outerWidth();
		//
		// // console.log(fontText1, fontText2)
		//
		// var totalFontWidth = fontText1 + fontText2;
		// this.totalFontWidth = totalFontWidth;



		// $(window).resize( self.resize )
		// //and so its ran at least one time
		// this.resize();

		// // Listen for orientation changes
		// window.addEventListener("orientationchange", this.resize);

		// $('#piece1').css({ paddingTop: $('#headerWrapper').outerHeight() + 42 })
		// $('#headerWrapperCenterElement').css({ paddingTop: $('#headerWrapper').outerHeight() + 42 })

	}
	// resize() {
	// 	var self = this;

		

	// 	// var widthToSet = $(document.documentElement).outerWidth();

	// 	// console.log(widthToSet)

	// 	// if(widthToSet >= this.smallestWidthPossible) {
	// 	// 	$('#page').css({ 'width': widthToSet + 'px' });
	// 	// 	$('#emblem-element').css({ width: widthToSet + 'px', height: 350 });
	// 	// }

	// 	// console.log(allContentElementWidth, smallestWidthTheContainerThatHoldsThePictureCanBe);

	// 	// if(allContentElementWidth >= smallestWidthTheContainerThatHoldsThePictureCanBe) {
			
	// 	// 	this.setPageWidth();

	// 	// }
	// 	// else {
	// 	// 	// //I added this else if flow so that I can make sure the page, when it enters the  keeps getting wider in width
	// 	// 	// //
	// 	// 	// if(currentWidth > this.lastWidth) {

	// 	// 	// }

	// 	// 	var 
	// 	// }




	// 	// Coty commented out the below 12-21-2016 since I am moving the fancy font header to the Emblem.jsx file
	// 	//
	// 	// //now I need to position the font element
	// 	// var fontText1Element = document.getElementById('fontText1');
	// 	// var fontText2Element = document.getElementById('fontText2');
	// 	// // var fontText1 = $(fontText1Element).outerWidth();
	// 	// // var fontText2 = $(fontText2Element).outerWidth();
	// 	// // var totalFontWidth = fontText1 + fontText2;

	// 	// var totalWidth = parseFloat(document.getElementById('page').style.width);

	// 	// //sometimes when this resize method runs nothing gets accomplished
	// 	// //so I need to account for this when the width is '', otherwise I
	// 	// //can continue with the flow as normal
	// 	// if(document.getElementById('page').style.width == '') {
	// 	// 	//for the set timeout option
	// 	// 	setTimeout(self.resize, 100);
	// 	// }
	// 	// else {
	// 	// 	if(totalWidth < this.totalFontWidth) {
	// 	// 		$(fontText1Element).css({ display: 'block'});
	// 	// 		$(fontText2Element).css({ display: 'block'});
	// 	// 		var fontHeaderHeight = $('#fontText1').outerHeight() * 2;
	// 	// 		$('#fontHeader').css('top', '-' + fontHeaderHeight + 'px');			
	// 	// 	}
	// 	// 	else {
	// 	// 		$(fontText1Element).css({ display: 'inline-block'});
	// 	// 		$(fontText2Element).css({ display: 'inline-block'});
	// 	// 		var fontHeaderHeight = $('#fontText1').outerHeight();
	// 	// 		$('#fontHeader').css('top', '-' + fontHeaderHeight + 'px');
	// 	// 	}
	// 	// }

	// 	// this.lastWidth = widthToSet;
	// }
	render() {		
			return (
				<div style={styles.root}>
					{/*<Emblem />*/}
					{/*<div id="backgroundDiv"></div> commented out 12-08-2016 to help fix issue with background image */}
					<div id="page" style={styles.page}>
						
						<div style={styles.application}>
							<Navbar />
							<center style={styles.pdfLink}>Click <a id="pdfLink" target="_blank" href="#/applicationForm" style={styles.a}>here</a> for an application (opens in a new tab).</center>
							{/*<center style={styles.pdfLink}>Click <a id="pdfLink" target="_blank" href="/#/assets/application_final.pdf" style={styles.a}>here</a> for an application (opens in a new tab).</center>*/}
						</div>

					</div>
				</div>
			)
	}
}

//3144 / 2388 //original image size
//so,
//2388 / 3144 = z / 300 //solve for z

const widthHelper = 300; //set the width for the image here to preserver aspect ratio
var styles = {
	root: {
		width: '100%',
		paddingBottom: 15
	},
	a: {
		cursor: 'pointer'
	},
	allContent: {
		marginBottom: 30
	},
	application: {
		width: '100%',
		height: 1000,
		fontSize: 20
	},
	credits: {
		fontSize: 14
	},
	fontHeader: {
		display: 'inline-block'
	},
	fontHeaderContainer: {
		width: '100%',
		textAlign: 'center',
		position: 'absolute'
	},
	headingAndPicture: {
		margin: '0px',
		padding: '0px',
		display: 'inline-block',
		// float: 'left'
		// width: 300 //this is the pictures width
	},
	img: {
		width: widthHelper,
		height: widthHelper * 2388 / 3144, //to preserver aspect ratio
		// position: 'absolute'
	},
	imgSrc: {
		src: './assets/AlMcKayPhoto.jpg'
	},
	// page: { //added 12-08-2016 to help fix IE issue with the background picture
	// 	position: 'relative'
	// },
	paddingBottom: {
		paddingBottom: 15
	},
	page: {
		zIndex: 2 //the Emblem.jsx Component returns the logo and all set with zIndex: 1 so to keep that Component from overlapping over the top of the content, this zIndex: 2 is needed
	},	
	paragraphOne: {
		width: 'calc(100% - 300px)',
		float: 'right'
	},
	paragraphWrapper: {
		paddingLeft: 15,
		paddingRight: 15
		// width: 500,
		// marginLeft: 'auto',
		// marginRight: 'auto'
	},
	paragraphElement: {
		paddingRight: 25,
		paddingLeft: 25,
		fontSize: 30,
		margin: 0
	},
	removePaddingAndMargin: {
		margin: 0,
		padding: 0
	},
	section1Heading: {
		width: 300, //that's what the picture's width is so this heading text will center perfectly above the picture
		
		// display: 'inline-block'
		float: 'left'
	},
	section1: {
		paddingTop: 30
	},
	paddingTop: {
		paddingTop: 15
	},
	pdfLink: {
		paddingTop: 15,
		fontSize: 40
	}
}

module.exports = Home;
