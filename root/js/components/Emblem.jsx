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

		// $('#emblem-background-image').css({ height: heightTS });	Coty commented out 12_23_2016 since I will be using background-size: cover in css to set the width and height of the image

		var top = $('#emblem-element').outerHeight();

		this.setState({ gradientHelperTopShift: top })

		document.getElementById('logo').appendChild(document.getElementById('svg2'));

		//here I need to add an event to listen if the browser window zoomed
		//$().someListener(EmblemObject.zoomChanged)
		$(window).resize( EmblemObject.zoomChanged )
		EmblemObject.zoomChanged();

		//now to expose the EmblemObject globally
		window.EmblemObject = EmblemObject;
		window.EmblemObject.backgroundImageWidth = stylesHelper.backgroundImageWidth;
		//and to keep things consistent:
		EmblemObject.backgroundImageWidth = stylesHelper.backgroundImageWidth;


		//now I will set the logo's position up in the correct position on the screen
		var topToShift = $('#logo').outerHeight() - 10;	//-10 to not cut off the bottom of the fancy font heading
		$('#fontHeader').css({ top: topToShift });

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
				

				{/* the font declarations and the size is set in index.html */}
				<div style={styles.fontHeaderContainer} id="fontHeader">
					<div style={styles.fontHeader} className="customfont1" id="fontText1">Chickamauga</div><div style={styles.fontHeader} className="customfont1" id="fontText2">Cherokee</div>
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
		
		//start Coty added 12-23-2016 to make the image position change based on the size of the image
		if(totalWidth >= 1200) {
			// backgroundPosition: 'center -100px'
			$('#backgroundImage').css({ backgroundPosition: 'center -150px' });
		}
		else if(totalWidth < 1200) {

			$('#backgroundImage').css({ backgroundPosition: '' });
		}
		//end


		//start Coty added 12-28-2016 to make sure the text header doesn't mess up when the width of the page gets too small
		//what I need to do is see how much space the font header needs
		var fontTotalWidth = $('#fontText1').outerWidth() + $('#fontText2').outerWidth();

		console.log(fontTotalWidth, totalWidth);


		if(fontTotalWidth >= totalWidth) {
			//if here then the total page width is smaller than the needed space of the font header elements
			$('.customfont1').each(function() {
				$(this).css({ fontSize: '80px' });
			})
		}
		else {
			//I will remove the inline style and allow the css stylesheet take over
			$('.customfont1').each(function() {
				$(this).css({ fontSize: '' });
			})
		}
		//end
	},
}

var stylesHelper = {
	backgroundImageWidth: '1200',
	helperWidth: '100%',
	helperHeight: '350px',
	imagePositionConstant: 'center -100px',
	imagePosition: ''
}

var styles = {
	one: {
		width: stylesHelper.helperWidth, 
		height: stylesHelper.helperHeight,
		position: 'fixed',
		top: '0px',
		zIndex: '2'	//this makes the emblem be right on top of the main-background image (the clouds/sky)
		// left: '-25%',
		// background: '#511515'
		// background: '#D5FF8'
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
		width: '102%',	//because I noticed an issue of the picture not quite making it the full width sometimes 
		height: '100%', 
		// width: '1000px', 
		// // height: stylesHelper.helperHeight,
		// height: '1000px',
		backgroundImage: 'url("../../assets/main-background.jpg")',
		// transform: 'scale(1.25, 1.25)',
		position: 'fixed',
		top: '0px',
		zIndex: '1',
		// width: '1200px',
		// width: stylesHelper.backgroundImageWidth + 'px',
		// height:'600px',
		backgroundSize: 'cover',
		// backgroundPosition: 'center -100px',	//this pans the photo around
		// backgroundPosition: stylesHelper.imagePosition,	//this pans the photo around
		backgroundRepeat: 'no-repeat',
		textAlign: 'center',
		margin: 'auto',
		padding: '0'
	},
	fontHeader: {
		display: 'inline-block',
		fontFamily: '"CustomFont1", Verdana, Tahoma',
	    fontSize: 100
	},
	fontHeaderContainer: {
		width: '100%',
		textAlign: 'center',
		position: 'fixed',
		zIndex: 3
	}
}


//kick it off
EmblemObject.start();


module.exports = Emblem;
