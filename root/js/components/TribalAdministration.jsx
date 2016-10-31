import React from 'react';

import $ from 'jquery';

export default class TribalAdministration extends React.Component {
	componentDidMount() {
		//at first I let the container that gives the shadow effect not have a
		//width specified, but after everything is done rendering, I want
		//all of the container boxes to have the same width so I get the
		//largest one, then set all of them to the that width
		var largestWidth = 0,
		currentWidth = 0;
		// $('.hasContainer').each(() => {
		// 	currentWidth = $(this).outerWidth();
		// 	if(currentWidth > largestWidth) {
		// 		largestWidth = currentWidth;
		// 	}
		// })
		// $('.hasContainer').each(() => {
		// 	this.style.width = largestWidth;
		// })
		$('.hasContainer').each((index, element) => {
			currentWidth = $(element).outerWidth();
			if(currentWidth > largestWidth) {
				largestWidth = currentWidth;
			}
		})
		$('.hasContainer').each((index, element) => {
			$(element).css({ width: largestWidth });
		})

	}

	render() {
		return (
			<div style={styles.paddingLeftAndTop}>
				<center>
					<h1>TribalAdministration</h1>
					<div style={styles.borderBottom}><h2 style={styles.h2}>Soverign Chickamauga Cherokee Tribe</h2></div>


					<br />
					<br />

					<div style={styles.container} className="hasContainer">
						<div style={styles.positionFontSize}><b>Tribal Chief</b></div>
						<br />
						<div style={styles.paddingLeft, styles.fontSize}>Albert McKay</div>
					</div>

					<br />

					<div style={styles.container} className="hasContainer">
						<div style={styles.positionFontSize}><b>Assistant Chief</b></div>
						<br />
						<div style={styles.paddingLeft, styles.fontSize}>Dwight Vincent</div>
					</div>

					<br />

					<div style={styles.container} className="hasContainer">
						<div style={styles.positionFontSize}><b>Council Members</b></div>
						<br />
						<div style={styles.paddingLeft}>
							<div style={styles.fontSize}>Kenneth Wilderson - (479)-477-2577</div>
							<br />
							<div style={styles.fontSize}>Darrell Ritter - (918)-413-4468</div>
							<br />
							<div style={styles.fontSize}>Jimmy Huett - (479)-970-4830</div>
							<br />
							<div style={styles.fontSize}>Bob Dixon - (479)-355-0595</div>
							<br />
							<div style={styles.fontSize}>James Henderson - (580)-421-3507</div>
							<br />
							<div style={styles.fontSize}>Robert Jones - (479)-280-8168</div>
						</div>
					</div>
				</center>
			</div>
		)
	}
}

var styles = {
	borderBottom: {
		borderBottom: 'solid 1px black'
	},
	container: {
		display: 'inline-block',
		fontSize: 20,
		padding: 15,
	    marginBottom: 20,
	    borderRadius: 0,
	    backgroundColor: '#FFF',
	    boxShadow: '0 2px 2px 0 rgba(0,0,0,.16),0 0 2px 0 rgba(0,0,0,.12)'
	},
	h2: {
		paddingBottom: 5
	},
	paddingLeft: {
		// paddingLeft: 25
	},
	paddingLeftAndTop: {
		// paddingLeft: 25,
		paddingTop: 20
	},
	positionFontSize: {
		fontSize: 20
	},
	fontSize: {
		fontSize: 18
	}
}


