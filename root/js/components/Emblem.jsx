import React from 'react';
import $ from 'jquery';

//document.addEventListener('scroll', EmblemObject.pageDidScroll)


/*

when scrolling down, make the emblem have sort of a background
and it either reveals it fully, or hides it (depending on if the
user is scrolling up or down)

once I get scrolled down to a certain point, animate a transition effect
to make another smaller header appear (maybe make it only like 35px in 
height - not very intrusive at all)


*/

		//http://jsfiddle.net/skmasq/mP974/
		// function wheel($div, deltaY) {
		//     var step = 80;
		//     var pos = $div.scrollTop();
		//     var nextPos = pos + (step * (-deltaY))
		//     console.log("DelatY: " + deltaY + ", Step: " + step + ", nextPos: " + nextPos);
		//     $div.scrollTop(nextPos);
		// }

		// $('#test').bind('mousewheel', function (event, delta, deltaX, deltaY) {
		//     if (delta > -2 && delta < 2) {
		//         wheel($(this), deltaY);
		//         event.preventDefault();
		//     }
		//     console.log(delta);
		// });


var Emblem = React.createClass({
	getInitialState: function() {
		return {
			gradientHelperTopShift: 350
		}
	},
	componentDidMount: function() {
	
		//at the end of mounting...I'm still having to clean up with jquery because of the lazy way I'm doing this...
		//this helps me properly set the height as a perfect percentage
		var totalHeight = $('#emblem-element').outerHeight(),
		logosHeight = $('#logo').outerHeight(),
		heightTS = (100 - ((logosHeight / totalHeight) * 100)) + '%'; //in %'s

		$('#emblem-background-image').css({ height: heightTS });

		var top = $('#emblem-element').outerHeight();

		this.setState({ gradientHelperTopShift: top })

		document.getElementById('logo').appendChild(document.getElementById('svg2'));

		//here I need to add an event to listen if the browser window zoomed
		//$().someListener(EmblemObject.zoomChanged)
		$(window).resize( EmblemObject.zoomChanged )


		//now to expose the EmblemObject globally
		window.EmblemObject = EmblemObject;
		window.EmblemObject.backgroundImageWidth = stylesHelper.backgroundImageWidth;
		//and to keep things consistent:
		EmblemObject.backgroundImageWidth = stylesHelper.backgroundImageWidth;

	},
	render: function() {
		return (
			<div>
				{/*<div style={styles.backgroundImage}></div>*/}
				<div id="backgroundImage"style={styles.backgroundImage}></div>
				<div id="emblem-element" style={styles.one}>
					<div id="logo">
					</div>
					<div id="emblem-background-image"></div>
				</div>
				<div id="gradientHelper" style={styles.gradientHelper}></div>
			</div>
		)
	}
});

/* //I will have to convert this css into what react expects in the inline styles
	width: 100%;
	height: 75px;
	/*background: #511515;
	background: #511515;
	background: -moz-linear-gradient(#511515, #000);
	background: -webkit-linear-gradient(#511515, #000);
	background: -o-linear-gradient(#511515, #000);
	background: -ms-linear-gradient(#511515, #000);/*For IE10
	background: linear-gradient(#511515, #000);
	filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#ffffff', endColorstr='#000000');/*For IE7-8-9
	margin-bottom: 5px;
*/


var EmblemObject = {
	//hasScrolled will help me initialize the scrolling starting value
	hasScrolled: false,
	scrollPosition: 0,
	backgroundImageWidth: '',
	prior_scrollTop: 0,
	increment: 1,
	start: function() {
		window.addEventListener('scroll', EmblemObject.pageDidScroll)


		$('#body').bind('wheel', function (event, delta, deltaX, deltaY) {
			/* //make this better
			var current_scrollTop = $('#body').scrollTop();
			if(current_scrollTop > EmblemObject.prior_scrollTop) {
				//further scrolled down the page
				//alert(current_scrollTop + ' > ' + EmblemObject.prior_scrollTop)
				$('#body').scrollTop($('#body').scrollTop() + 2)

			}
			else {
				//lesser scrolled on the page
				//alert(current_scrollTop + ' < ' + EmblemObject.prior_scrollTop)	
				$('#body').scrollTop($('#body').scrollTop() - 2)

			}
			EmblemObject.prior_scrollTop = current_scrollTop;
			//EmblemObject.increment += 2;
			*/
		});




	},
	wheel: function($div, deltaY) {
		    var step = 160;
		    var pos = $div.scrollTop();
		    var nextPos = pos + (step * (-deltaY))
		    //alert("DelatY: " + deltaY + ", Step: " + step + ", nextPos: " + nextPos);
		    $div.scrollTop(nextPos);
	},
	iteration: 0,
	pageDidScroll: function(e) {
		//if(EmblemObject.iteration < 25) {
			//window.scrollTo(0, $('#page').scrollTop(EmblemObject.iteration));
		//}

		//EmblemObject.interation++;
	},
	zoomChanged: function() {
		


		var totalWidth = parseFloat(window.top.document.documentElement.clientWidth);
		var backgroundWidth = parseFloat(EmblemObject.backgroundImageWidth);

		
		// console.log(totalWidth,  backgroundWidth)


		if(totalWidth > backgroundWidth) {	
			// stylesHelper.backgroundImageWidth * percentNeeded = totalWidth
			// stylesHelper.backgroundImageWidth * percentNeeded = totalWidth
			var percentNeeded = (totalWidth - backgroundWidth) / backgroundWidth;

			var scaleToUse = 1 + percentNeeded + .30; //+ .30 to help will error

			// $.extend(styles.backgroundImage, { transform: 'scale(' + scaleToUse + ',' + scaleToUse + ')' })

			// console.log(document.getElementById('backgroundImage'))
			document.getElementById('backgroundImage').style.transform = 'scale(' + scaleToUse + ',' + scaleToUse + ')';

		}
		else {
			document.getElementById('backgroundImage').style.transform = 'scale(1, 1)';
		}
	},
}

var stylesHelper = {
	helperWidth: '100%',
	helperHeight: '350px',
	backgroundImageWidth: '1200'
}

var styles = {
	one: {
		width: stylesHelper.helperWidth, 
		height: stylesHelper.helperHeight,
		position: 'fixed',
		top: '0px',
		// left: '-25%',
		// background: '#511515'
		background: '#D5EFF8'
	},
	two: {
		cx: 100,
		cy: 100,
		r: 75,
		fill: 'orange'
	},
	svg: {
		width: '100%',
		height: '175px'
	},
	gradientHelper: {
		width: '100%',
		height: 75,
		background: '#D5EFF8',
		background: '#D5EFF8',
		background: '-moz-linear-gradient(#D5EFF8, #D5EFF8)',
		background: '-webkit-linear-gradient(#D5EFF8, #D5EFF8)',
		background: '-o-linear-gradient(#D5EFF8, #D5EFF8)',
		background: '-ms-linear-gradient(#D5EFF8, #D5EFF8)',/*For IE10*/
		background: 'linear-gradient(#D5EFF8, #D5EFF8)',
		filter: "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#D5EFF8', endColorstr='#D5EFF8')",/*For IE7-8-9*/
		marginBottom: 5,
		top: 350,
		position: 'fixed'
	},
	/*
		very badly I need to account for the different zoom percentages
	*/
	backgroundImage: {
		// width: stylesHelper.helperWidth, 
		// width: '100px', 
		// width: '1000px', 
		// // height: stylesHelper.helperHeight,
		// height: '1000px',
		backgroundImage: 'url("../../assets/main-background.jpg")',
		// transform: 'scale(1.25, 1.25)',
		position: 'fixed',
		top: '0px',
		zIndex: '1',
		// width: '1200px',
		width: stylesHelper.backgroundImageWidth + 'px',
		height:'600px',
		backgroundSize: 'cover',
		backgroundPosition: 'center -150px',
		backgroundRepeat: 'no-repeat',
		textAlign: 'center',
		margin: 'auto',
		padding: '0'
	}
}


//kick it off
EmblemObject.start();


module.exports = Emblem;
