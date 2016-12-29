import React from 'react';

import $ from 'jquery';

// import Emblem from './Emblem.jsx';
import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';


var History = React.createClass({
	elements: [],

	totalFontWidth: 0,

	smallestWidthPossible: 445,

	componentDidMount: function() {
		var self = this; //self helps me with not conflicting with jquery's `this` in the code later on
		this.minPageWidth = $('#minPageWidthHelper').outerWidth();

		//first I will set the page's width
		var widthToSet = $(document.documentElement).outerWidth();
		$('#page').css({ 'width': widthToSet + 'px' });

		// Coty commented out 12-20_2016 since this History.jsx does not need to know about the text elements
		//
		// //added the following lines to set the position of the font header
		// var fontHeaderHeight = $('#fontText1').outerHeight();
		// $('#fontHeader').css('top', '-' + fontHeaderHeight + 'px');

		// //this helps me know what the total width of the font header is before its changed to display: block messing with the width values later
		// var fontText1 = $('#fontText1').outerWidth();
		// var fontText2 = $('#fontText2').outerWidth();

		// // console.log(fontText1, fontText2)

		// var totalFontWidth = fontText1 + fontText2;
		// this.totalFontWidth = totalFontWidth;

		// alert($(window).outerWidth())
		// alert($(window).outerHeight())
		$(window).resize( self.resize )
		//and so its ran at least one time
		this.resize();

		// $('#piece1').css({ paddingTop: $('#headerWrapper').outerHeight() + 42 })
		// $('#headerWrapperCenterElement').css({ paddingTop: $('#headerWrapper').outerHeight() + 42 })
	},
	resize: function() {
		var self = this;

		

		var widthToSet = $(document.documentElement).outerWidth();

		// console.log(widthToSet)


		if(widthToSet >= this.minPageWidth) {
			$('#page').css({ width: widthToSet + 'px' });

			// alert(this.minPageWidth + ' : ' + widthToSet);

		}
		else {
			// alert(this.minPageWidth)
			$('#page').css({ width: (this.minPageWidth + 30) + 'px' });
			$('.container').each(function() {
				$(this).css({ width: (this.minPageWidth + 200) + 'px' });
			});
		}

		// console.log(allContentElementWidth, smallestWidthTheContainerThatHoldsThePictureCanBe);

		// if(allContentElementWidth >= smallestWidthTheContainerThatHoldsThePictureCanBe) {
			
		// 	this.setPageWidth();

		// }
		// else {
		// 	// //I added this else if flow so that I can make sure the page, when it enters the  keeps getting wider in width
		// 	// //
		// 	// if(currentWidth > this.lastWidth) {

		// 	// }

		// 	var 
		// }

		// Coty commented out 12-20_2016 since this History.jsx does not need to know about the text elements
		//
		// //now I need to position the font element
		// var fontText1Element = document.getElementById('fontText1');
		// var fontText2Element = document.getElementById('fontText2');
		// // var fontText1 = $(fontText1Element).outerWidth();
		// // var fontText2 = $(fontText2Element).outerWidth();
		// // var totalFontWidth = fontText1 + fontText2;

		// var totalWidth = parseFloat(document.getElementById('page').style.width);

		// //sometimes when this resize method runs nothing gets accomplished
		// //so I need to account for this when the width is '', otherwise I
		// //can continue with the flow as normal
		// if(document.getElementById('page').style.width == '') {
		// 	//for the set timeout option
		// 	setTimeout(self.resize, 100);
		// }
		// else {
		// 	if(totalWidth < this.totalFontWidth) {
		// 		$(fontText1Element).css({ display: 'block'});
		// 		$(fontText2Element).css({ display: 'block'});
		// 		var fontHeaderHeight = $('#fontText1').outerHeight() * 2;
		// 		$('#fontHeader').css('top', '-' + fontHeaderHeight + 'px');			
		// 	}
		// 	else {
		// 		$(fontText1Element).css({ display: 'inline-block'});
		// 		$(fontText2Element).css({ display: 'inline-block'});
		// 		var fontHeaderHeight = $('#fontText1').outerHeight();
		// 		$('#fontHeader').css('top', '-' + fontHeaderHeight + 'px');
		// 	}
		// }

		// this.lastWidth = widthToSet;
	},
	render: function() {		
			return (
				<div style={styles.paddingBottom}>
					{/*<Emblem />*/}
					{/*<div id="backgroundDiv"></div> commented out 12-08-2016 to help fix issue with background image */}
					<div id="page">
						{/* the font declarations and the size is set in index.html */}
						{/*}
						<div style={styles.fontHeaderContainer} id="fontHeader">
							<div style={styles.fontHeader} className="customfont1" id="fontText1">Chickamauga</div><div style={styles.fontHeader} className="customfont1" id="fontText2">Cherokee</div>
						</div>
						*/}

						{/*<div id="gradientHelper"></div>*/}
						<div id="paddingHelper">
							<Header />
							<Navbar fontSize={20} ref={(elem) => this.elements['Navbar'] = elem } />

							<div style={styles.allContent} id="all-content">
								
								<div style={styles.section1} id="section-1" className="section">
					
									<div style={styles.paragraphWrapper}>
										
										<div className="container" style={styles.paragraphHeader}>
											History of the Sovereign Chickamauga Cherokee Tribe of Cherokee Nation West
										</div>
									
										<div style={styles.container}>
											
											<br />
											
											<div className="container" style={styles.pageTextContent}>
												President Thomas Jefferson administration made many treaties with Chickamauga Cherokees. However in 1808, the Compact of 1802 was not needed to effect the migration of some 1,130 Chickamaugans to land West of the Mississippi (today Dardanelle, Arkansas, in Yell County). Jefferson had merely to suggest to Tahlonteskee and other Chickamaugans that if they did not care to remain in the same country with their enemy country men, they could remove to Dardanelle Rock. Thus, in the Spring of 1808, Tahlonteskee fearing assassination notified president Jefferson that his people were ready to migrate. Following their migration, Tahlonteskee's band of Cherokees called themselves, "Cherokee West or Old Settlers".
											</div>

											<br />

											<div style={styles.pageTextContent}>
												Around 1811 Ooholonteskee half brother of Tahlonteskee known by the whites as "John Jolly", Chief Chickalah migrated to Dardanelle Arkansas now know as Chickalah town bringing a band of Chickamauga Cherokees 1811-1812. Chief Bowles - Chief Dutch with a number of Chickamauga Cherokees in the Danville area. One initial location on the Arkansas was at a point where the river passed between two small mountains. They dubbed the site as The Dardanelle. From there the Cherokees spread out up the Arkansas and along inlet creeks such as Illinois, Pine, Spanda, Horsehead, Frog, and Mulberry. One sizable group took up residence along Petite Jean River, South of the Arkansas River.
											</div>

											<br />
										
										</div>

										<div id="minPageWidthHelper" style={styles.minPageWidthHelper}>Chickamauga</div>
									</div>
								</div>
							</div>
						</div>
						{/*<Footer />*/}
						<div id="end"></div>
					</div>
				</div>
			)
	}
})

//3144 / 2388 //original image size
//so,
//2388 / 3144 = z / 300 //solve for z

const widthHelper = 300; //set the width for the image here to preserver aspect ratio
var styles = {
	allContent: {
		marginBottom: 30
	},
	container: {
		padding: 15,
	    marginBottom: 20,
	    borderRadius: 0,
	    backgroundColor: '#FFF',
	    boxShadow: '0 2px 2px 0 rgba(0,0,0,.16),0 0 2px 0 rgba(0,0,0,.12)'
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
	minPageWidthHelper: {
		visibility: 'hidden',
		position: 'absolute',
		top: -1000,
		textAlign: 'center',
		fontSize: 50,
		padding: 15,
	    marginBottom: 20,
	    borderRadius: 0,
	    backgroundColor: '#FFF',
	    boxShadow: '0 2px 2px 0 rgba(0,0,0,.16),0 0 2px 0 rgba(0,0,0,.12)'
	},
	// page: { //added 12-08-2016 to help fix IE issue with the background picture
	// 	position: 'relative'
	// },
	paddingBottom: {
		paddingBottom: 15
	},
	pageTextContent: {
		fontSize: 30,
		marginLeft: 50,
		marginRight: 50
	},
	paragraphHeader: {
		textAlign: 'center',
		fontSize: 50,
		padding: 15,
	    marginBottom: 20,
	    borderRadius: 0,
	    backgroundColor: '#FFF',
	    boxShadow: '0 2px 2px 0 rgba(0,0,0,.16),0 0 2px 0 rgba(0,0,0,.12)'		
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
	}
}

module.exports = History;
