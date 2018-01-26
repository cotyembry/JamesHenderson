import React from 'react';
import { findDOMNode } from 'react-dom';

import Navbar from './Navbar.jsx';

import store from '../store.js';

// import $ from 'jquery';

// var ReactFitText = require('../../node_modules/react-fittext/lib/ReactFitText');


//started at like 11:16pm 1/4/18
/*

//do a get request on the following url and see if I can somehow pass back a json object
//https://script.google.com/macros/s/AKfycbw3jmNPfOGLzWA5gPjsVHE2_LA_ey4R6hFgeIh_hWSVhzqreQwj/exec

var ranges = [
  // Range names ...
];
gapi.client.sheets.spreadsheets.values.batchGet({
   spreadsheetId: spreadsheetId,
   ranges: ranges
}).then((response) => {
  var result = response.result;
  console.log(`${result.valueRanges.length} ranges retrieved.`);
});



*/

export default class TribalAdministration extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			administration: [],		//this will eventually hold an array of strings representing the administration names to render in TribalAdministration.jsx
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
		//this is exposed in index.js
		window.store.pageLocation = 'administration';
		//now I will add the sizing api for the header
		$(this.refs['header']).fitText(1.1, { minFontSize: '16px', maxFontSize: '60px' });

		//1. make request to google app script spreadsheet to get the administration names out of the excel spreadsheet
		// https://script.googleusercontent.com/macros/echo?user_content_key=0qR4aI2yaXavSfPiyMa6C9Key0UcZcrr3bgvRXuqq1LQa56nH9ohJQuFlvsxeSHV6PHSuFYFq-89eO-J6U1Rq9-digFasIQ1m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFFUUEpROvUKp2hF6ZyVz85GlDw60gZe2QG-teAEP9RpLH8Q2aVmUXMp4pjG62aaobq7Om5fZs7D&lib=MTI9A92u9q3Z5vm0jZywCZWEEqCYY8GRQ
		$.get("https://script.googleusercontent.com/macros/echo?user_content_key=0qR4aI2yaXavSfPiyMa6C9Key0UcZcrr3bgvRXuqq1LQa56nH9ohJQuFlvsxeSHV6PHSuFYFq-89eO-J6U1Rq9-digFasIQ1m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFFUUEpROvUKp2hF6ZyVz85GlDw60gZe2QG-teAEP9RpLH8Q2aVmUXMp4pjG62aaobq7Om5fZs7D&lib=MTI9A92u9q3Z5vm0jZywCZWEEqCYY8GRQ", function (data) {
			console.log(data);
			alert("Load was performed.");
		});
	}
	render() {
		var _styles = {}
		
		if(document.documentElement.clientWidth < 400) {
			_styles.container = { ...styles.container, width: 'calc(100% - 70px)', marginLeft: 35, marginRight: 35 }	//-20px to account for the margin on the left and right side
		}
		else {
			_styles.container = { ...styles.container }
		}
		
		// {this.props.tribalAdministration.map((personsName, i) =>
		// 	<div style={styles.fontSize}>{personsName}</div>						
		// )}
		return (
			<div id="page" ref={(ref) => { this.refs['page'] = ref }} style={styles.page}>
				<Navbar fontSize={20} />
				<center>
					<div id="headerElement" ref={(ref) => { this.refs['header'] = ref }}  style={Object.assign(styles.pageName, this.state.marginHelper)} className="paddingTop">Tribal Administration of the Soverign Chickamauga Cherokee Tribe</div>


					<br />
					<br />

					<div style={_styles.container} className="hasContainer">
							<div style={styles.positionFontSize} className="paddingBottom15"><b>Tribal Chief</b></div>
							<br />
							<div style={styles.fontSize}>Albert McKay</div>
					</div>

					<br />

					<div style={_styles.container} className="hasContainer">
						<div style={styles.positionFontSize} className="paddingBottom15"><b>Assistant Chief</b></div>
						<br />
						<div style={styles.fontSize}>Dwight Vincent</div>
					</div>

					<br />

					<div style={_styles.container} className="hasContainer" id="lastContainer">
						<div style={styles.positionFontSize} className="paddingBottom15"><b>Council Members</b></div>{/* I added a style to tribaladministration.css for this element*/}
						<br />
						<div style={styles.paddingLeft}>
							
							
							{/*
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
							*/}

							{this.state.administration.map((admin, i) =>
								<admin key={i} />
							)}
						</div>
					</div>
				</center>

				<center style={styles.imgCaptionTransition}>
					<h3>Below is a district map of the state of Arkansas outlining the administrations district regions.</h3>
				</center>

				<center id="imgParent" style={styles.imgParent}>
					<img id="districtMap" style={styles.districtMap.img} src={styles.districtMap.src}></img>
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
		width: 'calc(100% - 200px)',		//-200px to account for the margin on both sides
		maxWidth: 800,
		display: 'inline-block',
		fontSize: 20,
		padding: 20,
		marginLeft: 100,
		marginRight: 100,
	    marginBottom: 20,
	    borderRadius: 0,
	    backgroundColor: '#FFFFFF',
	    boxShadow: '0 2px 2px 0 rgba(0,0,0,.16),0 0 2px 0 rgba(0,0,0,.12)'
	},
	div: {
		paddingBottom: 5,
		fontSize: 40
	},
	districtMap: {
		src: '../../assets/districtMapOriginal.png',
		img: {
			transform: 'rotate(-90deg) translateY(120px)',	//translateY because I rotate the Image first of all, second the left side of the picture gets cut out of view if I don't do the translation
			width: '100%',
		}
	},
	imgCaptionTransition: {
		color: 'white',
		fontSize: 20
	},
	imgParent: {
		width: '100%',
		overflowX: 'auto',
		backgroundColor: 'white'
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
