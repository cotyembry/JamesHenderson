import React from 'react';

import $ from 'jquery';

import Navbar from './Navbar.jsx';

export default class Beliefs extends React.Component {
	componentDidMount() {
		var self = this;

		var topTS = $('#parent-navbar-item').outerHeight();
		$('#contentParent').css({ top: topTS });

		var heightTS = $('#contentParent').outerHeight() + topTS;
		$('#page').css({ height: heightTS });

		this.window = window;	//this will help later in the resize event as far as performance goes
		$(window).resize(self.resize);

	}

	resize() {
		//start Coty added 12-21-2016
		var totalWidth = this.window.document.documentElement.clientWidth;
		// if(totalWidth <= (stylesHelper.minimumPageWidth + stylesHelper.padding)) {
		if(totalWidth <= stylesHelper.minimumPageWidth) {
			//this is the minimum width allowed, don't allow the width to get any smaller
			//in this case the element #page is the page element that will keep
			//the width state of the page
			$('#page').css({ width: '800px' });
			$('#emblem-element').css({ width: '800px' });
			$('#fontHeader').css({ width: '800px' });
			EmblemObject.locked = true;
		}
		else {
			//the width needs to stay at 100% if the totalWidth space allows for it
			$('#page').css({ width: '100%' });
			$('#emblem-element').css({ width: '100%' });
			$('#fontHeader').css({ width: '100%' });
			EmblemObject.locked = false;
		}
		//end
	}

	render() {
		return (
			<div style={styles.page} id="page">
				
				<Navbar fontSize={20} />
				
				<div id="contentParent" style={styles.beliefsRoot}>
					<div id="content" style={styles.content}>
						
						<center style={styles.container}><h1 style={styles.removePaddingAndMargin}>Beliefs</h1></center>

						<div style={styles.container}>
							
							<br />

							<center><h3 style={styles.removePaddingAndMargin}>Traditional Cherokee Beliefs</h3></center>
							
							<br />
							In the Cherokee language there was no word for “religion” because spiritual practices are an integral part of every aspect of daily life; they are necessary for the harmony and balance or wellness of the individual, family, clan and community. Healing and worship are considered one and the same.
							<br />
							The concept of health and wellness is not only a physical state, but a spiritual one as well.
							Traditional beliefs concerning wellness and un-wellness are:
							Traditional belief in a Creator, sometimes referred to as the Great Creator, Great Spirit, or Great One.
							Human beings are made up of spirit, mind, and body.
							Plants and animals, like humans, are part of the spirit world. The spirit world exits side by side with, and intermingles with, the physical world.
							The spirit existed before it came into physical body and will exist after the body dies.
							Illness affects the mind and spirit as well as the body.
							Wellness is harmony in spirit, mind and body.
							Unwellness is disharmony in spirit, mind and body.
							Natural unwellness is caused by the violation of a sacred, social or natural law of Creation.
							Unnatural unwellness is caused by conjuring (witchcraft) from those with destructive intentions.
							Each of us is responsible for his or her own wellness.
							<br />
							<br />
							Health and wellness not only is the necessity of seeking harmony within oneself, with others, and with one’s surroundings, emphasizes or on an active relationship between the physical and the spirit world.
							<br />
							<br />
							<strong>Why we give thanks to the four directions</strong>
							<br/>
							<br/>
							From Egela, Fire, we receive the heat that makes or hearts alive, pulsing with vitality and flickering with vibrancy.
							From Elohine, Mother Earth, we receive the solid form of our physical being, that which we know as the body, made of all the sam substance that makes up every living thing in our world.
							From Ama, Water, we receive the life stream of our blood, flowing ever outward before returning once again to the source of its beginning, only to flow again outward, giving life to the form.
							From Inole, Wind, we receive our first breath of life and experience the Giveaway of our last sigh.
							This is why we give thanks always to the Four Directions, they are that which makes us what we are, both in substance and in form. And in the center is our spirit, the ever-changing, every-lasting connection with all that is, all that moves and flows and breaths and flickers. We are one with all that is, and things are connected like the blood that unites on family. We arrive, emerging from the formlessness to separateness, and return once again to the formless, boundless, and undivided realm of the spirit-complete consciousness and forever emerging. We are our Nuwhati. We learn our Nuwhati. We become our Nuwhati, and once again we are our Nuwhati.
							<br />
							<br />
						</div>
						

							<center style={styles.container}><h2 style={styles.removePaddingAndMargin}>A CHEROKEE PRAYER</h2></center>
						

						<div style={styles.container}>
							<br/>
							O Great One
							<br/>
							<br/>
							Thank you for the Spirit of the Wind,
							it stirs my spirit and sends messages to my heart.
							<br/>
							<br/>
							I thank you for the Spirit of the Mother Earth,
							as I listen to the drum beat,
							I hear the heart beat that gives us life
							<br/>
							<br/>
							O Great One
							<br/>
							<br/>
							I thank you for the Ancestors and the teachings,
							that guide our way of life here on mother Earth,
							I will forever hold sacred the pipe of peace,
							and I will share the tobacco for prayer,
							as I give thanks to the elders and the Ancient Fire.
							<br/>
							<br/>
							O Great One
							<br/>
							<br/>
							I give thanks in the way of the Red Clay people,
							<br/>
							<br/>
							Oh gi daw da, gal un la die hi
							<br/>
							<br/>
							Wa do
							<br />
							<br />
							<br />
							<strong>Giving Thanks</strong>
							<br/>
							<br/>
							<br/>
							O Great One, we come before you in a humble manner, offering what gifts we have, giving thanks for the gifts of life that we have been given amidst the beauty of the Great Creation, so that we may learn to walk the path of Good Medicine as we give thanks to each of the Four Directions:
							<br />
							<br />
							To the spirit of Fire/Sun (warmth and light) in the East,
							<br />
							<br />
							To the spirit of Earth (peace and renewal) in the South,
							<br />
							<br />						
							To the spirit of Water (purity and strength) in the West,
							<br />
							<br />						
							To the spirit of Wind (wisdom and giving) in the North,
							<br />
							<br />						
							We give thanks to Mother Earth and to the Sacred Fire, which burns brightly in our hearts, offering us the precious gifs of clarity, openness, strength, and wisdom as we walk the path of peace. We give thanks to all our relations and for the beauty fo all things, for those who walk alongside us, for those yet to come, in harmony and balance, we give thanks, O Great One, we give thanks, Wah doh.
							<br />
							<br />						
							<strong>Lord’s Prayer</strong>
							<br />
							<br />
							Our Father heaven dweller, My loving will be (to) thy name, Your Lordship, let it make its appearance. Here upon Earth let it happen what you think, the same as in heaven is done. Daily our food is given to us this day. Forgive us our debts the same as we forgive our debtors, and not temptation being lead us into, deliver us from evil existing. For Thine, Your Lordship is and the power is, and the glory is forever. Amen.
						</div>
					</div>
				</div>
			</div>
		)
	}
}

var stylesHelper = {
	minimumPageWidth: 800,
	padding: 15 * 2		//*2 since it contributes twice (on the left and right side of the element)
}

var styles = {
	beliefsRoot: {
		width: '100%',
		paddingTop: 10,
		// top: 490,
		position: 'absolute',
		// background: 'rgba(255, 255, 255, 0.5)'
	},
	page: {
		width: '100%',
		marginTop: 425,
		zIndex: 2,
		position: 'absolute',
		background: '#d9d9d9',
		background: '-moz-linear-gradient(#d9d9d9, #000)',
		background: '-webkit-linear-gradient(#d9d9d9, #000)',
		background: '-o-linear-gradient(#d9d9d9, #000)',
		background: '-ms-linear-gradient(#d9d9d9, #000)',/*For IE10*/
		background: 'linear-gradient(#d9d9d9, #000)',
		filter: "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#ffffff', endColorstr='#000000')"/*For IE7-8-9*/
	},
	content: {
		width: stylesHelper.minimumPageWidth,
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	container: {
		fontSize: 35,
		padding: stylesHelper.padding,
	    marginBottom: 20,
	    borderRadius: 0,
	    backgroundColor: '#FFF',
	    boxShadow: '0 2px 2px 0 rgba(0,0,0,.16),0 0 2px 0 rgba(0,0,0,.12)'
	},
	removePaddingAndMargin: {
		margin: 0,
		padding: 0
	}
}
