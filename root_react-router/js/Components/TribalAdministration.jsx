import React from 'react';
import { findDOMNode } from 'react-dom';

import Navbar from './Navbar.jsx';

// import $ from 'jquery';

// var ReactFitText = require('../../node_modules/react-fittext/lib/ReactFitText');


export default class TribalAdministration extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			marginHelper: {
				marginLeft: 25,
				marginRight: 25
			}
		}
		this.oldTotalWidth = 0;
		this.adjustmentHelper = 0;
		this.hasBeenSet = false;
	}
	componentWillMount() {
		this.refs = [];
	}
	componentDidMount() {
		$(this.refs['header']).fitText(1.1, { minFontSize: '12px', maxFontSize: '60px' });



		//at first I let the container that gives the shadow effect not have a
		//width specified, but after everything is done rendering, I want
		//all of the container boxes to have the same width so I get the
		//largest one, then set all of them to the that width

		// coty commented out 03-09-2017 since I am going to try to just have margin helpers on both sides of the element
		//
		//TODO: convert this to use this.setState(...) rather than setting the DOM directly with jquery
		// var largestWidth = 0,
		// currentWidth = 0;
		// $('.hasContainer').each((index, element) => {
		// 	currentWidth = $(element).outerWidth();
		// 	if(currentWidth > largestWidth) {
		// 		largestWidth = currentWidth;
		// 	}
		// })
		// this.largestWidth = largestWidth;	//store this for use later
		// $('.hasContainer').each((index, element) => {
		// 	$(element).css({ width: largestWidth });
		// })

		// if I ever use this logic, it needs to be moved to a resize event handler and converted to use jquery instead
		// var totalWidth = $('#page').outerWidth();

		// if(styles.container.width > totalWidth + 20) {	//+20 to account for the 10px margin I will put on the left and right sides later in the logic
		// 	styles.container.width = 'calc(100% - 20px)';
		// }
		// else {
		// 	styles.container.width = '';
		// }

		// coty commented out 03-08-2017
		//
		// $(window).resize(this.resize.bind(this))
		// this.priorWidth = $('#page').outerWidth();	//save this for the resize event

		// $(window).resize(this.resizetwo.bind(this));

	}
	resizetwo() {
		console.log(this.refs['header'], this.refs['page'])
		var headerWidth = $(this.refs['header']).outerWidth(true);
		var pageWidth = $(this.refs['page']).width();

		console.log('headerWidth =' + headerWidth, 'pageWidth = ' + pageWidth)
	}

	// resize() {

	// 	//I noticed that when the page gets to be a certain size (very small in width) the #page
	// 	//element gets smaller than the styles.container elements so this code will change the
	// 	//#page elements css from the 100% in the stylesheet to an inline style if ever it needs
	// 	//to then change it back to width = '' and let the css stylesheet take over again
	// 	var totalWidth = $('#page').outerWidth();				//this is the current width of the page
	// 	var containerWidth = $('#lastContainer').outerWidth();
	// 	var windowWidth = $(window).width();

	// 	//this if else logic and adding the inline widths and taking them off is making sure once the content is the smallest size it can be, the other content stops decreasing in size as well
	// 	//note: the EmblemObject is exposed through the window global and setting the .locked property says to Emblem.jsx 'do not run logic to set the font header elements size'
	// 	if(totalWidth <= containerWidth) {
	// 		//if the total width available is less than the container's width this is wrong and
	// 		//should be changed
	// 		if(windowWidth > containerWidth) {
	// 			$('#page').css({ width: '' });
	// 			$('#emblem-element').css({ width: '100%' });
	// 			$('#fontHeader').css({ width: '100%' });
	// 			EmblemObject.locked = false;				
	// 		}
	// 		else {
	// 			$('#page').css({ width: containerWidth });
	// 			$('#emblem-element').css({ width: containerWidth });
	// 			$('#fontHeader').css({ width: containerWidth });
	// 			EmblemObject.locked = true;
	// 		}
	// 	}
	// 	else {
	// 		$('#page').css({ width: '' });
	// 		$('#emblem-element').css({ width: '100%' });
	// 		$('#fontHeader').css({ width: '100%' });
	// 		EmblemObject.locked	= false;		
	// 	}

	// 	//Coty added 3161230 to make it where the header element only gets as small as the container elements then when the page allows (i.e. there is enough widht space) it allows the header element to get wider than the #container elements
	// 	var headerElement = $('#headerElement')[0];

	// 	var leftSide = this.largestWidth + styles.container.padding * 2; 
	// 	var rightSide = $(headerElement).width() + 2 * styles.pageName.padding;

	// 	//the if else logic below deals with the id="headerElement"
	// 	if(this.hasBeenSet == false) {
	// 		// if(this.largestWidth >= ($(headerElement).outerWidth() - (this.state.marginHelper.marginLeft + this.state.marginHelper.marginRight))) {
	// 		if(leftSide >= rightSide) {	//*2 to account for right and left
	// 			this.oldTotalWidth = totalWidth;
	// 			this.hasBeenSet = true;

	// 			$(headerElement).css({ width: this.largestWidth });
	// 			this.setState({
	// 				marginHelper: {
	// 					marginLeft: 0,
	// 					marginRight: 0
	// 				}
	// 			})
	// 		}
	// 	}
	// 	else {

	// 		if(totalWidth > this.oldTotalWidth) {
	// 			//if here then the page has gotten back big enough to set the margins back to what they were
	// 			this.setState({
	// 				marginHelper: {
	// 					marginLeft: 25,
	// 					marginRight: 25
	// 				}
	// 			})
	// 			//I can also remove the width on the element now
	// 			$(headerElement).css({ width: '' });
	// 			this.hasBeenSet = false;
	// 		}			
	// 	}
	// 	//end 3161230


	// 	//Coty added 01-15-2017
	// 	//now to add logic to be able to properly set the <img> elements parent width (i.e. the <center> element)
	// 	//everytime the page size changes, with respect to width, change the center element's width to match
	// 	var currentWidth = $('#page').outerWidth();
	// 	if(currentWidth !== this.priorWidth) {
	// 		//the width has changed and needs to be set
	// 		$('#imgParent').css({ width: currentWidth });
	// 	}
	// 	this.priorWidth = currentWidth;	//make sure to save this for the next iteration
	// }
	render() {
		return (
			<div id="page" ref={(ref) => { this.refs['page'] = ref }} style={styles.page}>
				<Navbar fontSize={20} />
				<center>
					<div id="headerElement" ref={(ref) => { this.refs['header'] = ref }}  style={Object.assign(styles.pageName, this.state.marginHelper)} className="paddingTop">Tribal Administration of the Soverign Chickamauga Cherokee Tribe</div>


					<br />
					<br />

					<div style={styles.container} className="hasContainer">
							<div style={styles.positionFontSize} className="paddingBottom15"><b>Tribal Chief</b></div>
							<br />
							<div style={styles.fontSize}>Albert McKay</div>
					</div>

					<br />

					<div style={styles.container} className="hasContainer">
						<div style={styles.positionFontSize} className="paddingBottom15"><b>Assistant Chief</b></div>
						<br />
						<div style={styles.fontSize}>Dwight Vincent</div>
					</div>

					<br />

					<div style={styles.container} className="hasContainer" id="lastContainer">
						<div style={styles.positionFontSize} className="paddingBottom15"><b>Council Members</b></div>{/* I added a style to tribaladministration.css for this element*/}
						<br />
						<div style={styles.paddingLeft}>
							<div style={styles.fontSize}>District 1: Robert Jones - (479)-280-8168</div>
							<br />
							<br />
							<div style={styles.fontSize}>District 2: Darrell Ritter - (918)-413-4468</div>
							<br />
							<br />
							<div style={styles.fontSize}>District 4: Jimmy Huett - (479)-970-4830</div>
							<br />
							<br />
							<div style={styles.fontSize}>District 5: Kenneth Wilkerson - (479)-477-2577</div>
							<br />
							<br />
							<div style={styles.fontSize}>District 6: Bob Dixon - (479)-355-0595</div>
							<br />
							<br />
							<div style={styles.fontSize}>District 7: James Henderson - (580)-421-3507</div>
						</div>
					</div>
				</center>
				<center id="imgParent" style={styles.imgParent}>
					<img id="districtMap" src={styles.districtMap.src}></img>
				</center>
			</div>
		)
	}
}

var styles = {
	borderBottom: {
		borderBottom: 'solid 1px black'
	},
	widthTest: {
		width: 225
	},
	container: {
		boxSizing: 'border-box',
		width: 'calc(100% - 200px)',
		maxWidth: 800,
		display: 'inline-block',
		fontSize: 20,
		padding: 20,
		marginLeft: 100,
		marginRight: 100,
	    marginBottom: 20,
	    borderRadius: 0,
	    backgroundColor: '#FFF',
	    boxShadow: '0 2px 2px 0 rgba(0,0,0,.16),0 0 2px 0 rgba(0,0,0,.12)'
	},
	div: {
		paddingBottom: 5,
		fontSize: 40
	},
	districtMap: {
		src: '../../assets/districtMapOriginal.png'
	},
	imgParent: {
		width: '100%',
		overflowX: 'auto'
	},
	paddingLeft: {
		// paddingLeft: 25
	},
	page: {
		width: '100%',
		// paddingLeft: 25,
		// paddingTop: 20,
		zIndex: 2 //the Emblem.jsx Component returns the logo and all set with zIndex: 1 so to keep that Component from overlapping over the top of the content, this zIndex: 2 is needed
	},
	pageName: {
		boxSizing: 'border-box',
		width: 'calc(100% - 50px)',
		fontSize: 60,
		display: 'inline-block',
		padding: 20,
		marginRight: 25,
		marginLeft: 25,
		marginTop: 25,
	    marginBottom: 20,
	    borderRadius: 0,
	    backgroundColor: '#FFF',
	    boxShadow: '0 2px 2px 0 rgba(0,0,0,.16),0 0 2px 0 rgba(0,0,0,.12)'		
	},
	positionFontSize: {
		fontSize: 35,
		display: 'inline-block'
	},
	fontSize: {
		fontSize: 30,
		display: 'inline-block',
		paddingTop: 10,
		paddingBottom: 10
	}
}
