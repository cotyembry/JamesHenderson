/**
 *		   Author:  John Coty Embry
 *	 Date Created:  10/17/2016
 *	Last Modified:  10/17/2016
 *
 *
 *	Proverbs 3:5-6 (one of my favorites, go check it out)
 */

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


import Navbar from './Navbar.jsx';


export default class History extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Navbar fontSize={20} ref={(elem) => this.elements['Navbar'] = elem } />
				<div style={styles.paddingHelper}>
					<center><h1>History of the Sovereign Chickamauga Cherokee Tribe of Cherokee Nation West</h1></center>
					<br />

					<p style={styles.container}>
						President Thomas Jefferson administration made many treatys with Chickamauga Cherokees. However in 1808, the Compact of 1802 was not needed to effect the migration of some 1,130 Chickamaugans to land West of the Mississippi (today Dardanelle, Arkansas, in Yell County). Jefferson had merely to suggest to Tahlonteskee and other Chickamaugans that if they did not care to remain in the same country with their enemy country men, they could remove to Dardanelle Rock. Thus, in the Spring of 1808, Tahlonteskee fearing assassination notified president Jefferson that his people were ready to migrate. Following their migration, Tahlonteskee's band of Cherokees called themselves, "Cherokee West or Old Settlers".
					</p>

					<p style={styles.container}>
						Around 1811 Ooholonteskee half brother of Tahlonteskee known by the whites as "John Jolly", Chief Chickalah migrated to Dardanelle Arkansas now know as <strong>Chickzlah</strong> town bringing a band of Chickamauga Cherokees 1811-1812. Chief Bowles - Chief Dutch with a number of Chickamauga Cherokees in the Danville area. One initial location on the Arkansas was at <strong>point</strong> where the river passed between two samll mountains. They dubbed the site as The Dardanelle. From there the Cherokees spread out up the Arkansas and along inlet creeks such as Illinois, Pine, <strong>Spadnz</strong>, Horsehead, Frog, and Mulberry one sizable group took up residence along Petite Jean River, South of the Arkansas River.
					</p>

				</div>
			</div>
		)
	}
}

// class HistoryBackground extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}
// 	render() {
// 		return (
// 			<div style={styles.historyBackground}>
// 				Here

// 			</div>
// 		)
// 	}
// }


var styles = {
	historyBackground: {
		width: '100%',
		height: '100%',
		border: 0,
		padding: 0,
		margin: 0,
		background: '#D5EFF8',
		position: 'absolute'
	},
	paddingHelper: {
		paddingRight: 100,
		paddingLeft: 100
	},
	container: {
		padding: 15,
	    marginBottom: 20,
	    borderRadius: 0,
	    backgroundColor: '#FFF',
	    boxShadow: '0 2px 2px 0 rgba(0,0,0,.16),0 0 2px 0 rgba(0,0,0,.12)'
	}
}

// module.exports = { History, HistoryBackground }
