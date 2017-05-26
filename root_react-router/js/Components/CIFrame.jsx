import React from 'react';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';

export default class CIFrame extends React.Component {
	componentWillMount() {
		this.refs = [];
	}
	componentDidMount() {
		//once this iframe mounts (even though its hidden to the user) this method is invoked
		//I use the reference to the root div DOM element walk the DOM down to find the child
		//iframe - I had to do it this way because refs weren't working on the iframe element
		//once I get the iframe I get a reerence to the document element to then append the
		//this div#formContainer element to the body element within the iframe (it looks so
		//different because jquery can take in a string and it will create those elements on
		//the fly for you)
		$(this.refs['iframeParent'].querySelectorAll('iframe')[0].contentWindow.document.body).append(`
			<div id="formContainer" style="display: none;"><!-- coty 05-25-2017 - since React Components are so weird when it comes to forms, I like using standard html for these types of elements...anyways, App.jsx uses this form to do a POST to my google script by creating an event and sending it to the below <button id="sendEmail">Send</button> element -->
			  <form id="gform" method="POST"
			  action="https://script.google.com/macros/s/AKfycbw3jmNPfOGLzWA5gPjsVHE2_LA_ey4R6hFgeIh_hWSVhzqreQwj/exec">
			    <fieldset>
			      <textarea id="message" name="message" placeholder="Message Body"></textarea>
			    </fieldset>
			    <button id="sendEmail">Send</button>
			  </form>
			</div>
		`)
	}
	render() {
		return (
			<div ref={(elementRef) => { this.refs['iframeParent'] = findDOMNode(elementRef) }} id='divId'><iframe id='emailiFrameContainer' onLoad={this.props.onload} style={{display: 'none'}}></iframe></div>
		)
	}
}