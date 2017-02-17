import React from 'react';

import $ from 'jquery';

// import Emblem from './Emblem.jsx';
import Header from './Header.jsx';
import Emblem from './Emblem.jsx';
import Navbar from './Navbar.jsx';


export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.elements = [];
		this.totalFontWidth = 0;
		this.smallestWidthPossible = 445;
	}

	componentDidMount() {
		var self = this; //self helps me with not conflicting with jquery's `this` in the code later on

		//TODO: in Emblem.jsx add logical to dynamically add the css stylesheet for the



		//first I will set the page's width
		var widthToSet = $(document.documentElement).outerWidth();
		$('#page').css({ 'width': widthToSet + 'px' });

		//this is for Al's photo:
		//setting the src attribute the React way in the styles object wasn't working so, jquery it is
		document.getElementById('jpg1').setAttribute('src', styles.imgSrc.src)

		//now I will set the width of the heading to match the width of the content
		var widthTS = $('#all-content').width();
		$('#pageHeading').css({ width: widthTS });

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


		$(window).resize( self.resize.bind(self) )
		//and so its ran at least one time
		this.resize();

		// $('#piece1').css({ paddingTop: $('#headerWrapper').outerHeight() + 42 })
		// $('#headerWrapperCenterElement').css({ paddingTop: $('#headerWrapper').outerHeight() + 42 })
	}
	resize() {
		var self = this;

		var widthToSet = $(document.documentElement).outerWidth();

		// console.log(widthToSet)

		if(widthToSet >= this.smallestWidthPossible) {
			$('#page').css({ 'width': widthToSet + 'px' });

			$('#emblem-element').css({ width: '100%' });
			$('#fontHeader').css({ width: '100%' });
			EmblemObject.locked = false;
		}
		else {
			// console.log('two')
			$('#page').css({ 'width': this.smallestWidthPossible + 'px' });

			$('#emblem-element').css({ width: '100%' });
			$('#fontHeader').css({ width: '100%' });
			EmblemObject.locked = false;
		}


		//adjust the header element's width to stay the same as the contents width
		var widthTS = $('#all-content').width();
		$('#pageHeading').css({ width: widthTS });


		// console.log(widthTS, $('#paddingHelper').width())

		//start Coty added 12-29-2016
		var paddingHelperWidth = $('#paddingHelper').width();
		if(widthTS > paddingHelper) {
			//if the width of the content element is larger than what the width provided by the paddingHelper element make enough room for the content
			//to correct, add the number of pixels difference to the width percentage

			var amountOfPixelsToAdd = $('#pageHeading').outerWidth() - $('#paddingHelper').width();


			styles.widthPercentage;
		}
		//end 12-19-2016

	}
	render() {		
			return (
				<div style={styles.paddingBottom}>
					<div id="page" style={styles.page}>

						<div id="paddingHelper">
							<Header />
							<Navbar fontSize={20} />
	
							<div id="pageHeading" style={styles.container}>
								<center><h1>Get To Know Albert McKay</h1></center>
							</div>

							<div style={styles.allContent} id="all-content">
								
								<div style={styles.section1} id="section-1" className="section">
					
									<div style={styles.paragraphWrapper}>
										
										<div style={styles.section1Heading} id="headerAndPictureWrapper">
											<center id="headerWrapperCenterElement">
												<h2 style={styles.removePaddingAndMargin}>Military Hall of Honor Inductee</h2>
												<img id="jpg1" style={styles.img}></img>
												<div id="headerWrapper">
													<h2 style={styles.removePaddingAndMargin}>MSG ALBERT McKAY</h2>
													<h2 style={styles.removePaddingAndMargin}>U.S. Army</h2>
												</div>
											</center>
										</div>

						
										<p style={styles.paragraphElement} id="piece1">
											
												Albert McKay was born in Parks, Arkansas on January 20, 1932. He attended Grade School and High School in Heavener, OK. He joined the Oklahoma National Guard on October 13, 1947 at the age of 15. He served in HQ & HQ Company, 279th Infantry, 45th Infantry Division and received an Honorable Discharge on January 15, 1948 to enlist into the Regular Army. He enlisted in the Air Force on January 16, 1948, received his basic training in San Antonio, TX and then was assigned to Wheeler Field, Hawaii. He received an Honorable Discharge on January 5, 1949. He re-enlisted in the U.S. Army on July 16, 1949 at FT. Sill, OK with the 43rd AIB, 2nd Armored Division.
										</p>

										<br />

										<p style={styles.paragraphElement} id="piece2">
												In 1951 he was transferred to Korea with the Second Infantry Division, 38th Infantry Regiment. He returned to the States in 1952. Master Sergeant McKay served in different locations including Ft. Sill and was reassigned to Korea from 1955 to 1957 with the 34th Infantry Regiment. He was assigned as 1st Seargeant at Hunter Liggett Military Reservation, CA until 1958. He was then assigned to Staff and Faculty Battery, USAAMS, 4th U.S. Army at Ft. Sill, OK.
										</p>
										
										<br />

										<p style={styles.paragraphElement}>
											His awards and docorations include: Silver Star for Gallantry in Action, Combat Infantry Badge, Presidential Unit Citation, Korean Service Medal with three bronze service stars, National Defense Service Medal, Good Conduct Medal Bronze Clasp with three loops, United Nations service Medal, Korean Distinguished Military Service Medal with silver star, Republic or Korea Presidential Unit citation, Japanese Occupational Medal, Purple Heart, Expert Carbine (M1), and Expert Pistol (Cal 45).
										</p>

										<br />

										<p style={styles.paragraphElement}>
											He received an Honorable Discharge from the U.S. Army on July 12, 1961 with 13 years, 1 month and 17 days of professional, dedicated and outstanding service to his country.
										</p>

										<br />

										<p style={styles.paragraphElement}>
											After discharge from the Army, he worked for Permanent Company in Lawton and Oklahoma City. After about a year he moved to Poteau, OK and opened his insurance office. He attended the Auctioneering School in Forth Smith, AR obtaining his license and then obtained his Real Estate License and opened an office in Howe, OK. There was no police in Howe so he became City Marshall. In addition, for 28 years he taught at the Auction School on sub-dividing land and auctioning. He joined the Professional Rodeo Association and the International Rodeo Association and announced about twenty five Rodeos a year in several states. He retired from announcing rodeos in 1981 but continued to sell real estate and hold benefit auctions to help people with severe illness pay their medical bills. MSC McKay also started a veterans council group at the Oklahoma Veterans Center in Sulphur, OK to assist veterans in applying for their earned entitlements.
										</p>

										<br />

										<p style={styles.paragraphElement}>
											In addition to the many activities MSC McKay has undertaken, he served as a Councilman of the <i>Sovereign Nation of the Chickamauga Cherokee Tribe</i> in Dardanelle, AR. In 2014 Albert McKay was elected <strong>Principal Chief of the Tribe</strong>. He continues to work to build the Chickamauga Cherokee Tribe and it continues to grow.
										</p>

										<br />

										<p style={styles.paragraphElement}>
											He is a member of the Veterans of Foreign Wars, The American Legion and the Disabled American Veterans.
										</p>

										<br />

										<p style={styles.paragraphElement}>
											The professional ability and outstanding accomplishments of Master Sergeant Albert McKay brings great credit upon himself, the United States Army, the State of Oklahoma and the Nation.
										</p>

										<br />

										<center><div style={styles.credits}>Presented by the Board of Trustees on June 15, 2015</div></center>
									</div>
								</div>
								
							</div>
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
	allContent: {
		paddingTop: 15,
		paddingBottom: 15,
	    marginTop: 20,
	    marginBottom: 30,
	    borderRadius: 0,
	    backgroundColor: '#FFF',
	    boxShadow: '0 2px 2px 0 rgba(0,0,0,.16),0 0 2px 0 rgba(0,0,0,.12)'
	},
	container: {
		paddingTop: 15,
		paddingBottom: 15,
	    marginTop: 20,
	    marginBottom: 30,
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
		paddingTop: 30,
	    marginLeft: 15,
	    marginRight: 15
	},
	widthPercentage: '80%'
}

module.exports = Home;
