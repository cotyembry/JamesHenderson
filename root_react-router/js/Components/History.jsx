import React from 'react';

import $ from 'jquery';

// import Emblem from './Emblem.jsx';
import Header from './Header.jsx';
import Navbar from './Navbar.jsx';


var History = React.createClass({
	elements: [],

	totalFontWidth: 0,

	smallestWidthPossible: 445,

	componentDidMount: function() {
		//this is exposed in index.js
		window.store.pageLocation = 'history';

		var self = this; //self helps me with not conflicting with jquery's `this` in the code later on
		this.minPageWidth = $('#minPageWidthHelper').outerWidth() > $('#emblem-element').outerWidth() ? $('#emblem-element').outerWidth() : $('#minPageWidthHelper').outerWidth();

		// console.log(this.minPageWidth);
		//this.minPageWidth = $('#backgroundImage').outerWidth();

		//first I will set the page's width
		var widthToSet = $(document.documentElement).outerWidth();
//		$('#page').css({ 'width': widthToSet + 'px' });	//coty 03-08-2017 commented out since this was causing a verticle scroll bar




		// console.log('document.documentElement.clientWidth = ', document.documentElement.clientWidth, 'widthToSet = ', widthToSet);

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



//		$(window).resize( self.resize )			coty commented out 03-08-2017 since I am just setting the width to be 100%
		//and so its ran at least one time
//		this.resize();



		// $('#piece1').css({ paddingTop: $('#headerWrapper').outerHeight() + 42 })
		// $('#headerWrapperCenterElement').css({ paddingTop: $('#headerWrapper').outerHeight() + 42 })
	},
	resize: function() {
		var self = this;


		var widthToSet = $(document.documentElement).outerWidth();

		// console.log('here ->', widthToSet, this.minPageWidth)

		// if(widthToSet >= this.minPageWidth) {
		if(widthToSet >= 450) {
			$('#page').css({ width: widthToSet + 'px' });

			$('#firstContainer').css({ fontSize: '50px' });

		}
		else {
			// $('#page').css({ width: this.minPageWidth + 'px' });
			$('#page').css({ width: '450px' });
			
			$('#firstContainer').css({ fontSize: '40px' });

			// this.resize();
		}


	},
	render: function() {		
			return (
				<div style={styles.paddingBottom}>
					<div id="page" style={styles.page}>

							<Navbar fontSize={20} ref={(elem) => this.elements['Navbar'] = elem } />
						<div id="paddingHelper">
							<Header />

							<div style={styles.allContent}>
								
								<div style={styles.section1} id="section-1">
					
									<div style={styles.paragraphWrapper}>
										
										<div id="firstContainer" className="container" style={styles.paragraphHeader}>
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

											<div style={styles.pageTextContent}>
												The Arkansas (on Western) Cherokees soon began to establish themselves on farms building log cabin homes, planting fields of corn, vegetable gardens, erecting rail fences for their cattle, and tending to their hogs and chickens. The men supported this agrarian produce by trapping and hunting deer, buffalo, and bear that were in plenty among the forested hills south of the Arkansas River. The women continued to weave their baskets and work at their looms as was their Cherokee tradition. Hides and produce were taken down river by canoe and boat four hundred miles to the Arkansas Post to trade for salt, sugar, and other items scarce in the Arkansas wilderness.
											</div>

											<br />

											<div style={styles.pageTextContent}>
												On June 24, 1823 acting governor Robert Chittenden of Arkansas territory met with a group of Arkansas Cherokee leaders on the south side of the Arkansas River in the vicinity of modern Dardanelle Yell County. The leaders who were present included John Jolly who was likely the most influential member of the group and would soon be elected Principal Chief of the Arkansas Cherokee and Black Fox, Watwebber, Watermellon, Young Glass, Thomas Graves, and George Morris. Each group came to the meeting with a different agenda, and neither group left the meeting satisfied. Both parties subsequently pressed their cases in writing to secretary of war John C Calhoun, who at the time had supervisory authority over Indian affairs.
											</div>

											<br />

											<div style={styles.pageTextContent}>
												When the Western boundary of Arkansas was finally surveyed, however, a majority of the lovely purchase land remained in Indian territory and fell under Indian control. It is still under full Indian control to this day in 2016.
											</div>

											<br />

											<div style={styles.pageTextContent}>
												The Western Cherokee are Native Americans who identified themselves as Cherokee, identified with the mountainous areas of Arkansas, Oklahoma, and Missouri. They lived west of the Mississippi before the Trail of Tears, and did not migrate to Indian Territory after the Cherokee Treaty of 1828. The Western Cherokee are not a single group but instead are a coalition of groups with various historical backgrounds in Arkansas, southern Missouri, eastern Oklahoma, Kansas, and Texas; they identify as a community with a singular identity. They are a single nation unified by their identity as a Cherokee, in their shared government, and in their recognition by the United States as the Cherokee Nation West under the Treaties of 1817 and 1819. The Cherokee Nation West never ratified or recognized the Treaty of 1828, which removed the Cherokee Nation West lands. The Western Cherokee Delegation who signed that document, which was sent for approval to the United States Congress by President Adams before it was ratified by the Cherokee Nation West Full Council, informed the United States verbally and in writing that the treaty was not valid until it was signed by the Full Council in Arkansas (Royce 1975, 118-120). The Western Cherokee Nation West Council (Sub-Agent Brearly letter Secretary of War, September 27, 1828).
											</div>											

											<br />

											<div style={styles.pageTextContent}>								The Western Cherokee constitute a coalition of diverse Cherokee groups each with a unique individual history. The unifying factors that held the Western Cherokee together included (1) an identity separate from other Cherokee based on a common belief that Creator had wished the Cherokee to move West and remove themselves from the "European" influence, (2) a common government, the Full Council of the Cherokee Nation West, and (3) identity with the Sacred Homelands in the Ozarks. Their lands included the hilly and mountainous areas of Arkansas, southern Missouri, eastern Oklahoma, southeastern Kansas, and northeastern Texas. Their core Sacred Homelands were bounded on the north by the Devil's Backbone (the north/south water flow break point in southern Missouri), the Mississippi River on the east, the Arkansas River on the south, and the end of the "hill county" in easter Oklahoma and southeastern Kansas. The Sacred Homelands had been lands that were held for at least 1800 years, though they were partially lost to invading "People Eaters" from the south and the "Great Warriors" from the west about 800-900 years ago (Interviews: Lee Brody and Jean Skaggs September 14, 2000, Red Wasp (John Dushanack) May 20, 2001, Rickard Craker November 24, 2001). Their lands, associated with their relationship with the United States government, were those lands outlined in the Treaty of 1819.					
											</div>

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
	page: {
		zIndex: 2 //the Emblem.jsx Component returns the logo and all set with zIndex: 1 so to keep that Component from overlapping over the top of the content, this zIndex: 2 is needed
	},
	paddingBottom: {
		paddingBottom: 15
	},
	pageTextContent: {
		fontSize: 30,
		marginLeft: 30,
		marginRight: 30
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
