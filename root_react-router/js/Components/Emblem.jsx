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


export default class Emblem extends React.Component {
	addCSSStyleSheet() {
		//if the style element for the cmGauge.css code has not been appended & it is not found in the DOM, append it
		if(this.cssDynamicStylesheetCreated == false && document.getElementById('dynamicStyleDefinitionEmblem') === null) {
			var cssDynamicStyleElement = document.createElement('style');
			cssDynamicStyleElement.type = 'text/css';
			cssDynamicStyleElement.className = 'dynamicStyleDefinitionEmblemClass';
			cssDynamicStyleElement.id = 'dynamicStyleDefinitionEmblem';

			let dynamicStyleDefinitionEmblem = `@font-face {
    font-family: "CustomFont1";
    src: url(./assets/fonts/AlexBrush-Regular.ttf) format("truetype");
}
.customfont1 { 
    font-family: "CustomFont1", Verdana, Tahoma;
    /*font-size: 70px;*/
    font-size: 100px;
}`		

			//finally, now that the element has been created, insert the css into it
			cssDynamicStyleElement.innerHTML = dynamicStyleDefinitionEmblem;
			//and append it to the document
			document.head.appendChild(cssDynamicStyleElement);

			this.cssDynamicStylesheetCreated = true;	//to not allow this element to be created again
		}


	}

	constructor(props) {
		super(props);

		this.cssDynamicStylesheetCreated = false;	//this will be used in the addCSSStyleSheet method

		this.state = {
			gradientHelperTopShift: 350,
			displayForFontHeader: 'block',
			visibilityForFontHeader: 'hidden'
		}
	}
	componentWillMount() {
		window.onunload = function(){ window.scrollTo(0,0); }
		this.addCSSStyleSheet();		
	}
	componentDidMount() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		//this .locked property will help me know if I need to adjust the font text

		EmblemObject.locked = false;

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
		EmblemObject.bodyElement = document.getElementsByTagName('body')[0];
		$(window).resize( EmblemObject.resize );
		EmblemObject.resize();

		var fontText1 = document.getElementById('fontText1');
		var fontText2 = document.getElementById('fontText2');
		var fontTotalWidth = $(fontText1).outerWidth() + $(fontText2).outerWidth();

		this.startingFontTotalWidth = fontTotalWidth;

		//I added this intervalChecker logic because I was having a difficult time getting the size of the font element; the sizes would come up differently at different times so I figured out some logic that is sort of an assertion to make sure the correct sizes are being set
		var intervalChecker = function() {
			var fontText1 = document.getElementById('fontText1');
			var fontText2 = document.getElementById('fontText2');
			var fontTotalWidth = $(fontText1).outerWidth() + $(fontText2).outerWidth();
			//if here then I am satisfied the font element has quit shifiting sizes on the page
			if(this.startingFontTotalWidth != fontTotalWidth) {
				clearInterval(this.clearInterval);
				//this if statement should be ran every single time or there is going to be a problem with how the page looks
				EmblemObject.resize();
				this.setState({							//Coty added 01-13-2017 to make sure to show the element
					displayForFontHeader: 'none',		//I set this to none because I am about to do a jquery animation
					visibilityForFontHeader: 'visible'
				});

				//now that the display is set to none I will do the animation
				$('#fontHeader').fadeIn(2000);
				this.setState({displayForFontHeader: 'block'})
			}
		}

		this.clearInterval = setInterval(intervalChecker.bind(this), 1000);

		//now to expose the EmblemObject globally
		window.EmblemObject = EmblemObject;
		window.EmblemObject.backgroundImageWidth = stylesHelper.backgroundImageWidth;
		//and to keep things consistent:
		EmblemObject.backgroundImageWidth = stylesHelper.backgroundImageWidth;


		//Coty 01-05-2017 added a new Seal.png file and I need to change some of the calculations for the topShift
		//the height was increased by 20px but the fontHeader didnt need to move at all

		//now I will set the logo's position up in the correct position on the screen
		EmblemObject.topShift = $('#logo').outerHeight() - 40;	//-10 to not cut off the bottom of the fancy font heading
		$('#fontHeader').css({ top: EmblemObject.topShift });

	}
	render() {
		//Coty added 01-13-2017 next three lines to add a fade in effect on the font header
		var fontHeaderContainerTempClone = {};
		Object.assign(fontHeaderContainerTempClone, styles.fontHeaderContainer);
		fontHeaderContainerTempClone.visibility = this.state.visibilityForFontHeader;
		fontHeaderContainerTempClone.display = this.state.displayForFontHeader;
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
				<div style={fontHeaderContainerTempClone} id="fontHeader">
					<div style={styles.fontHeader} className="customfont1" id="fontText1">Chickamauga</div><div style={styles.fontHeader} className="customfont1" id="fontText2">Cherokee</div>
				</div>
				


				<div id="gradientHelper" style={styles.gradientHelper}></div>
			</div>
		)
	}
}

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

	topShift: 0,



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

	resize: function() {
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

		//I added this .locked property since the EmblemObject is exposed through the window global
		if(EmblemObject.locked == false) {

			//start Coty added 12-28-2016 to make sure the text header doesn't mess up when the width of the page gets too small
			//what I need to do is see how much space the font header needs
			var fontText1 = document.getElementById('fontText1');
			var fontText2 = document.getElementById('fontText2');
			var fontTotalWidth = $(fontText1).outerWidth() + $(fontText2).outerWidth();

			if(fontTotalWidth >= totalWidth) {
				// if here then the total page width is smaller than the needed space of the font header elements
				$('.customfont1').each(function() {
					$(this).css({ fontSize: '90px' });
				});
				$('#fontHeader').css({ top: EmblemObject.topShift + 10 });

				fontTotalWidth = $(fontText1).outerWidth() + $(fontText2).outerWidth();
				if(fontTotalWidth >= totalWidth) {
					$('.customfont1').each(function() {
						$(this).css({ fontSize: '80px' });
					});

					// alert(EmblemObject.topShift)

					$('#fontHeader').css({ top: EmblemObject.topShift + 10 });					

					fontTotalWidth = $(fontText1).outerWidth() + $(fontText2).outerWidth();
					if(fontTotalWidth >= totalWidth) {
						$('.customfont1').each(function() {
							$(this).css({ fontSize: '70px' });
						});

						$('#fontHeader').css({ top: EmblemObject.topShift + 20 });			
				
						fontTotalWidth = $(fontText1).outerWidth() + $(fontText2).outerWidth();
						if(fontTotalWidth >= totalWidth) {
							$('.customfont1').each(function() {
								$(this).css({ fontSize: '60px' });
							});

							$('#fontHeader').css({ top: EmblemObject.topShift + 30 });
							
							fontTotalWidth = $(fontText1).outerWidth() + $(fontText2).outerWidth();
							if(fontTotalWidth >= totalWidth) {
								$('.customfont1').each(function() {
									$(this).css({ fontSize: '50px' });
								});

								$('#fontHeader').css({ top: EmblemObject.topShift + 40 });
								
								fontTotalWidth = $(fontText1).outerWidth() + $(fontText2).outerWidth();
								if(fontTotalWidth >= totalWidth) {
									$('.customfont1').each(function() {
										$(this).css({ fontSize: '40px' });
									});

									$('#fontHeader').css({ top: EmblemObject.topShift + 50 });
									
									fontTotalWidth = $(fontText1).outerWidth() + $(fontText2).outerWidth();
									if(fontTotalWidth >= totalWidth) {
										$('.customfont1').each(function() {
											$(this).css({ fontSize: '30px' });
										});

										$('#fontHeader').css({ top: EmblemObject.topShift + 60 });

										fontTotalWidth = $(fontText1).outerWidth() + $(fontText2).outerWidth();
										if(fontTotalWidth >= totalWidth) {
											$('.customfont1').each(function() {
												$(this).css({ fontSize: '20px' });
											});

											$('#fontHeader').css({ top: EmblemObject.topShift + 70 });
										}
									}
								}
							}
						}
					}
				}
			}
			else {
				//I need to see how much width the element takes up when the font size is returned back to 100px
				//I will create a clone of the font elements
				var customfont1Clone = document.getElementById('fontText1').cloneNode(true);	//true means do a deep copy
				var customfont2Clone = document.getElementById('fontText2').cloneNode(true);	//true means do a deep copy			

				// console.log(customfont1Clone)

				//make the element invisible
				customfont1Clone.style.visibility = 'hidden';
				customfont2Clone.style.visibility = 'hidden';

				var bodyElement = EmblemObject.bodyElement;
				bodyElement.appendChild(customfont1Clone);
				bodyElement.appendChild(customfont2Clone);

				//measure it
				//set the font sizes back to their defaults so I can measure them
				customfont1Clone.style.fontSize = '';
				customfont2Clone.style.fontSize = '';

				var elementWidthIfChanged = $(customfont1Clone).outerWidth() + $(customfont2Clone).outerWidth();			

				//then use the values

				//I only want to change the font sizes back if it will not interfere with the whole purpose of making the font smaller
				if(elementWidthIfChanged < totalWidth) {
					//I will remove the inline style and allow the css stylesheet take over
					$('.customfont1').each(function() {
						$(this).css({ fontSize: '' });
					});
					$('#fontHeader').css({ top: EmblemObject.topShift });
				}
				else {
					customfont1Clone.style.fontSize = '30px';
					customfont2Clone.style.fontSize = '30px';
					elementWidthIfChanged = $(customfont1Clone).outerWidth() + $(customfont2Clone).outerWidth();			
					if(elementWidthIfChanged < totalWidth) {
						//I will remove the inline style and allow the css stylesheet take over
						$('.customfont1').each(function() {
							$(this).css({ fontSize: '30px' });
						});

						$('#fontHeader').css({ top: EmblemObject.topShift + 60 });

						customfont1Clone.style.fontSize = '40px';
						customfont2Clone.style.fontSize = '40px';
						elementWidthIfChanged = $(customfont1Clone).outerWidth() + $(customfont2Clone).outerWidth();			

						if(elementWidthIfChanged < totalWidth) {
							//I will remove the inline style and allow the css stylesheet take over
							$('.customfont1').each(function() {
								$(this).css({ fontSize: '40px' });
							});

							$('#fontHeader').css({ top: EmblemObject.topShift + 50 });

							customfont1Clone.style.fontSize = '50px';
							customfont2Clone.style.fontSize = '50px';
							elementWidthIfChanged = $(customfont1Clone).outerWidth() + $(customfont2Clone).outerWidth();			

							if(elementWidthIfChanged < totalWidth) {
								//I will remove the inline style and allow the css stylesheet take over
								$('.customfont1').each(function() {
									$(this).css({ fontSize: '50px' });
								});

								$('#fontHeader').css({ top: EmblemObject.topShift + 40 });

								customfont1Clone.style.fontSize = '60px';
								customfont2Clone.style.fontSize = '60px';
								elementWidthIfChanged = $(customfont1Clone).outerWidth() + $(customfont2Clone).outerWidth();			

								if(elementWidthIfChanged < totalWidth) {
									//I will remove the inline style and allow the css stylesheet take over
									$('.customfont1').each(function() {
										$(this).css({ fontSize: '60px' });
									});

									$('#fontHeader').css({ top: EmblemObject.topShift + 30 });

									customfont1Clone.style.fontSize = '70px';
									customfont2Clone.style.fontSize = '70px';
									elementWidthIfChanged = $(customfont1Clone).outerWidth() + $(customfont2Clone).outerWidth();			

									if(elementWidthIfChanged < totalWidth) {
										//I will remove the inline style and allow the css stylesheet take over
										$('.customfont1').each(function() {
											$(this).css({ fontSize: '70px' });
										});

										$('#fontHeader').css({ top: EmblemObject.topShift + 20 });
									
										customfont1Clone.style.fontSize = '80px';
										customfont2Clone.style.fontSize = '80px';
										elementWidthIfChanged = $(customfont1Clone).outerWidth() + $(customfont2Clone).outerWidth();			

										if(elementWidthIfChanged < totalWidth) {
											//I will remove the inline style and allow the css stylesheet take over
											$('.customfont1').each(function() {
												$(this).css({ fontSize: '80px' });
											});

											$('#fontHeader').css({ top: EmblemObject.topShift + 10 });

											customfont1Clone.style.fontSize = '90px';
											customfont2Clone.style.fontSize = '90px';
											elementWidthIfChanged = $(customfont1Clone).outerWidth() + $(customfont2Clone).outerWidth();			

											if(elementWidthIfChanged < totalWidth) {
												//I will remove the inline style and allow the css stylesheet take over
												$('.customfont1').each(function() {
													$(this).css({ fontSize: '90px' });
												});

												$('#fontHeader').css({ top: EmblemObject.topShift + 10 });
											}
										}
									}								
								}							
							}
						}
					}
				}
				


				//delete it
				//now to clean up the DOM
				bodyElement.removeChild(customfont1Clone);
				bodyElement.removeChild(customfont2Clone);
			}
			//end Coty 12-28-2016

		}
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
		// background: '#D5EFF8',
		// background: '#D5EFF8',
		// background: '-moz-linear-gradient(#D5EFF8, #D5EFF8)',
		// background: '-webkit-linear-gradient(#D5EFF8, #D5EFF8)',
		// background: '-o-linear-gradient(#D5EFF8, #D5EFF8)',
		// background: '-ms-linear-gradient(#D5EFF8, #D5EFF8)',/*For IE10*/
		// background: 'linear-gradient(#D5EFF8, #D5EFF8)',
		// filter: "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#D5EFF8', endColorstr='#D5EFF8')",/*For IE7-8-9*/
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
		visibility: 'hidden',
		textAlign: 'center',
		position: 'fixed',
		zIndex: 2
	}
}


//kick it off
EmblemObject.start();


module.exports = Emblem;
