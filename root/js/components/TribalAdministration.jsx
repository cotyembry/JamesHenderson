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

		// if I ever use this logic, it needs to be moved to a resize event handler and converted to use jquery instead
		// var totalWidth = $('#page').outerWidth();

		// if(styles.container.width > totalWidth + 20) {	//+20 to account for the 10px margin I will put on the left and right sides later in the logic
		// 	styles.container.width = 'calc(100% - 20px)';
		// }
		// else {
		// 	styles.container.width = '';
		// }
		$(window).resize(this.resize)

	}
	resize() {
		//I noticed that when the page gets to be a certain size (very small in width) the #page
		//element gets smaller than the styles.container elements so this code will change the
		//#page elements css from the 100% in the stylesheet to an inline style if ever it needs
		//to then change it back to width = '' and let the css stylesheet take over again
		var totalWidth = $('#page').outerWidth();				//this is the current width of the page
		var containerWidth = $('#lastContainer').outerWidth();
		var windowWidth = $(window).width();


		if(totalWidth <= containerWidth) {
			//if the total width available is less than the container's width this is wrong and
			//should be changed
			if(windowWidth > containerWidth) {
				$('#page').css({ width: '' });
			}
			else {
				$('#page').css({ width: containerWidth });
			}
		}
		else {
			$('#page').css({ width: '' });
		}
	}
	render() {
		return (
			<div style={styles.paddingLeftAndTop}>
				<center>
					<div style={styles.pageName} className="paddingTop">Tribal Administration</div>
					<div><div style={styles.div} className="paddingTop10">Soverign Chickamauga Cherokee Tribe</div></div>


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
							<div style={styles.fontSize}>District 5: Kenneth Wilderson - (479)-477-2577</div>
							<br />
							<br />
							<div style={styles.fontSize}>District 6: Bob Dixon - (479)-355-0595</div>
							<br />
							<br />
							<div style={styles.fontSize}>District 7: James Henderson - (580)-421-3507</div>
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
	widthTest: {
		width: 225
	},
	container: {
		// width: 800,
		display: 'inline-block',
		fontSize: 20,
		padding: 20,
	    marginBottom: 20,
	    borderRadius: 0,
	    backgroundColor: '#FFF',
	    boxShadow: '0 2px 2px 0 rgba(0,0,0,.16),0 0 2px 0 rgba(0,0,0,.12)'
	},
	div: {
		paddingBottom: 5,
		fontSize: 40
	},
	paddingLeft: {
		// paddingLeft: 25
	},
	paddingLeftAndTop: {
		// paddingLeft: 25,
		paddingTop: 20
	},
	pageName: {
		fontSize: 60
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


