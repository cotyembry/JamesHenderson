import React from 'react';

import $ from 'jquery';

// import Emblem from './Emblem.jsx';
import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';



//todo: finish material design theme for the paragraphs
//http://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_material_download

var Home = React.createClass({
	elements: [],
	componentDidMount: function() {
		//setting the src attribute the React way in the styles object wasn't working so, jquery it is
		document.getElementById('jpg1').setAttribute('src', styles.imgSrc.src)
	},
	render: function() {
			return (
				<div>
					{/*<Emblem />*/}
					<div id="backgroundDiv"></div>
					<div id="page">
						{/*<div id="gradientHelper"></div>*/}
						<div id="paddingHelper">
							<Header />
							<Navbar ref={(elem) => this.elements['Navbar'] = elem } />
							{/*<Navbar menuItems, messages/>*/}
							{/*React.createElement(Navbar, {
						        menuItems//,
						        //secondaryMenuItems,
						        //messages: localeSpecificIcuMessagesForTheWholeAppCompiledOnTheServer
						    })*/}
							<div id="all-content">
								
								<div id="section-1" className="section">
									{/*<div style={styles.headingAndPicture}>
										
									</div>*/}
									<div style={styles.section1Heading}>
											<center>
												<h3>MSG ALBERT McKAY</h3>
												<h4>U.S. Army</h4>
											</center>
										</div>

										
										<img id="jpg1" style={styles.img}></img>



										<div style={styles.paragraphOne}>
											<p style={styles.piece1} id="piece1">
											
												Albert Mckay was born in Parks, Arkansas on January 20, 1932. He attended Grade School and High School in Heavener, OK. He joined the Oklahoma National Guard on October 13, 1947 at the age of 15. He served in HQ & HQ Company, 279th Infantry, 45th Infantry Division and received an Honorable Discharge on January 15, 1948 to enlist into the Regular Army. He enlisted in the Air Force on January 16, 1948, received his basic training in San Antonio, TX and then was assigned to Wheeler Field, Hawaii. He received an Honorable Discharge on January 5, 1949. He re-enlisted in the U.S. Army on July 16, 1949 at FT. Sill, OK with the 43rd AIB, 2nd Armored
											</p>

										</div>
									<div style={styles.paragraphWrapper}>
										<br/>
										<br/>
										<br/>
										<br/>
										<br/>
										<br/>
										<br/>
										<br/>
										<br/>
										<br/>
										<br/>
										<br/>

										{/*<div class="w3-panel w3-white w3-card-2 w3-display-container">
										    <span class="w3-display-topright w3-padding w3-hover-red">X</span>
										   <p class="w3-text-blue"><b>email.zip</b></p>
										   <p>http://www.w3schools.com/lib/email.zip</p>
										   <p class="w3-text-blue">Show in folder</p>
										</div>*/}
										<p id="piece2">
												Division. In 1951 he was transferred to Korea with the Second Infantry Division, 38th Infantry Regiment. He returned to the States in 1952. Master Sergeant McKay served in different locations including Ft. Sill and was reassigned to Korea from 1955 to 1957 with the 34th Infantry Regiment. He was assigned as 1st Seargeant at Hunter Liggett Military Reservation, CA until 1958. He was then assigned to Staff and Faculty Battery, USAAMS, 4th U.S. Army at Ft. Sill, OK.
											</p>
										<p>
											His awards and docorations include: Silver Start for Gallantry in Action, Combat Infantry Badge, Presidential Unit Citation, Korean Service Medal w/3 bronze service stars, National Defense Service Medal, Good Conduct Medal Bronze Clasp w/3 loops, United Nations service Medal, Korean Distinguished Military Service Medal w/silver star, Republic or Korea Presidential Unit citation, Japanese Occupational Medal, Purple Heart, Expert Carbine (M1), and Expert Pistol (Cal 45).
										</p>

										<p>
											He received an Honorable Discharge from the U.S. Army on on July 12, 1961 with 13 years, 1 month and 17 days of professional, dedicated and outstanding service to his country.
										</p>

										<p>
											After discharge from the Army, he worked for Permanent Company in Lawton and Oklahoma City. After about a year he moved to Poteau, OK and opened his insurance office. He attended teh Auctioneering School in Forth Smith, AR obtaining his License and then obtained his Real Estate License and opened an office in Howe, OK. There was no police in Howe so he became City Marshall. In addition, for 28 years he taught at the Auction School on sub-dividing land and auctioning. He joined the Professional Rodeo Association and the International Rodeo Association and announced about 25 Rodeos a year in several states. He retired from announcing rodeos in 1981 but continued to sell real estate and holding benefit auctions to help people with severe illness pay their medical bills. MSC McKay also started a veteran's council group at the Oklahoma Veterans Center in Sulphur, OK to assist veterans in applying for their earned entitlements.
										</p>

										<p>
											In addition to the many activities MSC McKay has undertaken, he served as a Councilman of the <i>Sovereign Nation of the Chickamauga Cherokee Tribe</i> in Dardanelle, AR. In 2014 Albert McKay was elected <strong>Principal Chief of the Tribe</strong>. He continues to work to build the Chickamauga Cherokee Tribe and it continues to grow.
										</p>

										<p>
											He is a member of the Veterans of Foreign Wars, The American Legion and the Disabled American Veterans.
										</p>

										<p>
											The professional ability and outstanding accomplishments of Master Sergeant Albert McKay brings great credit upon himself, the United States Army, the State of Oklahoma and the Nation.
										</p>
										<center><div style={styles.credits}>Presented by the Board of Trustees on June 15, 2015</div></center>
									</div>
								</div>
								<div id="section-3" className="section"></div>
								<div id="section-4" className="section"></div>
								<div id="section-5" className="section"></div>
								<div id="section-6" className="section"></div>
								<div id="section-7" className="section"></div>
							</div>
						</div>
						<Footer />
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
	credits: {
		fontSize: 14
	},
	headingAndPicture: {
		margin: '0px',
		padding: '0px',
		display: 'inline-block',
		width: 300 //this is the pictures width
	},
	img: {
		width: widthHelper,
		height: widthHelper * 2388 / 3144, //to preserver aspect ratio
		position: 'absolute'
	},
	imgSrc: {
		src: './assets/AlMcKayPhoto.jpg'
	},
	paragraphOne: {
		width: 'calc(100% - 300px)',
		float: 'right'
	},
	paragraphWrapper: {
		width: 500,
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	piece1: {
		margin: 0,
		padding: 0
	},
	section1Heading: {
		width: 300, //that's what the picture's width is so this heading text will center perfectly above the picture
		// float: 'left'
	}
}

module.exports = Home;
