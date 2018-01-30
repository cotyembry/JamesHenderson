import React from 'react';
import { findDOMNode } from 'react-dom';

import GetSheetDone from 'get-sheet-done';

import Navbar from './Navbar.jsx';

import store from '../store.js';

import '../../css/Admin.css';


/**
 * This TribalAdministration.jsx component links up with a google spreadsheet found in my own drive.google.com folder under the Scripts folder and the spreadsheet's name is JamesHenderson
 */

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
		// $.get('https://script.googleusercontent.com/macros/echo?user_content_key=0qR4aI2yaXavSfPiyMa6C9Key0UcZcrr3bgvRXuqq1LQa56nH9ohJQuFlvsxeSHV6PHSuFYFq-89eO-J6U1Rq9-digFasIQ1m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFFUUEpROvUKp2hF6ZyVz85GlDw60gZe2QG-teAEP9RpLH8Q2aVmUXMp4pjG62aaobq7Om5fZs7D&lib=MTI9A92u9q3Z5vm0jZywCZWEEqCYY8GRQ', (data) => {
		// $.get('https://sheets.googleapis.com/v4/spreadsheets/1hZr_x7r36h_qAe0bpQ6P33Bxd5msf5tpg1eS2J3uDFo/values/A1:B10000', (data) => {	//TODO: change the A1 notation from A1:B10000 to be more intelligent and query as many rows as possible
		// 	console.log(data);
			
		// // 	// let nameArray = data.split('__$$^$$__');

		// // 	// this.setState({
		// // 	// 	administration: nameArray
		// // 	// })
		// });

		// GetSheetDone.labeledCols('0qR4aI2yaXavSfPiyMa6C9Key0UcZcrr3bgvRXuqq1LQa56nH9ohJQuFlvsxeSHV6PHSuFYFq-89eO-J6U1Rq9-digFasIQ1m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFFUUEpROvUKp2hF6ZyVz85GlDw60gZe2QG-teAEP9RpLH8Q2aVmUXMp4pjG62aaobq7Om5fZs7D&lib=MTI9A92u9q3Z5vm0jZywCZWEEqCYY8GRQ').then(sheet => console.log(sheet))
		
		//now I will use an npm api to make using google sheets easier
		GetSheetDone.raw('1hZr_x7r36h_qAe0bpQ6P33Bxd5msf5tpg1eS2J3uDFo')
		.then(sheet => this.setState({administration: sheet.data}))
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
