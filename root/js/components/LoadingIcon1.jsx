import React from 'react';

export default class LoadingIcon extends React.Component {
	constructor(props) {
		super(props);
		this.stylesheetWasAdded = false;
	}
	addCSSStyleSheet() {
		//if the style element for the cmGauge.css code has not been appended & it is not found in the DOM, append it
		if(this.stylesheetWasAdded == false && document.getElementById('dynamicStyleDefinitionLoadingIcon1') === null) {
			var cssDynamicStyleElement = document.createElement('style');
			cssDynamicStyleElement.type = 'text/css';
			cssDynamicStyleElement.className = 'dynamicStyleDefinitionLoadingIcon1Class';
			cssDynamicStyleElement.id = 'dynamicStyleDefinitionLoadingIcon1';

			let dynamicStyleDefinitionLoadingIcon = `.bubblingG {
	text-align: center;
	width:160px;
	height:100px;
	margin: auto;
}

.bubblingG span {
	display: inline-block;
	vertical-align: middle;
	width: 20px;
	height: 20px;
	margin: 50px auto;
	background: rgb(0,0,0);
	border-radius: 100px;
	-o-border-radius: 100px;
	-ms-border-radius: 100px;
	-webkit-border-radius: 100px;
	-moz-border-radius: 100px;
	animation: bubblingG 1.5s infinite alternate;
	-o-animation: bubblingG 1.5s infinite alternate;
	-ms-animation: bubblingG 1.5s infinite alternate;
	-webkit-animation: bubblingG 1.5s infinite alternate;
	-moz-animation: bubblingG 1.5s infinite alternate;
}

#bubblingG_1 {
	animation-delay: 0s;
	-o-animation-delay: 0s;
	-ms-animation-delay: 0s;
	-webkit-animation-delay: 0s;
	-moz-animation-delay: 0s;
}

#bubblingG_2 {
	animation-delay: 0.45s;
	-o-animation-delay: 0.45s;
	-ms-animation-delay: 0.45s;
	-webkit-animation-delay: 0.45s;
	-moz-animation-delay: 0.45s;
}

#bubblingG_3 {
	animation-delay: 0.9s;
	-o-animation-delay: 0.9s;
	-ms-animation-delay: 0.9s;
	-webkit-animation-delay: 0.9s;
	-moz-animation-delay: 0.9s;
}



@keyframes bubblingG {
	0% {
		width: 20px;
		height: 20px;
		background-color:rgb(0,0,0);
		transform: translateY(0);
	}

	100% {
		width: 48px;
		height: 48px;
		background-color:rgb(255,255,255);
		transform: translateY(-42px);
	}
}

@-o-keyframes bubblingG {
	0% {
		width: 20px;
		height: 20px;
		background-color:rgb(0,0,0);
		-o-transform: translateY(0);
	}

	100% {
		width: 48px;
		height: 48px;
		background-color:rgb(255,255,255);
		-o-transform: translateY(-42px);
	}
}

@-ms-keyframes bubblingG {
	0% {
		width: 20px;
		height: 20px;
		background-color:rgb(0,0,0);
		-ms-transform: translateY(0);
	}

	100% {
		width: 48px;
		height: 48px;
		background-color:rgb(255,255,255);
		-ms-transform: translateY(-42px);
	}
}

@-webkit-keyframes bubblingG {
	0% {
		width: 20px;
		height: 20px;
		background-color:rgb(0,0,0);
		-webkit-transform: translateY(0);
	}

	100% {
		width: 48px;
		height: 48px;
		background-color:rgb(255,255,255);
		-webkit-transform: translateY(-42px);
	}
}

@-moz-keyframes bubblingG {
	0% {
		width: 20px;
		height: 20px;
		background-color:rgb(0,0,0);
		-moz-transform: translateY(0);
	}

	100% {
		width: 48px;
		height: 48px;
		background-color:rgb(255,255,255);
		-moz-transform: translateY(-42px);
	}
}`

			//finally, now that the element has been created, insert the css into it
			cssDynamicStyleElement.innerHTML = dynamicStyleDefinitionLoadingIcon;
			//and append it to the document
			document.head.appendChild(cssDynamicStyleElement);

			this.stylesheetWasAdded = true;	//to not allow this element to be created again
		}


	}

	componentWillMount() {
		this.addCSSStyleSheet();
	}
	render() {
		return (
			<div id="bubblingContainer" className="bubblingG">
				<span id="bubblingG_1">
				</span>
				<span id="bubblingG_2">
				</span>
				<span id="bubblingG_3">
				</span>
			</div>
		)
	}
}
