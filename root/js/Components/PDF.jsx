import React from 'react';

import $ from 'jquery';


export default class PDF extends React.Component {
	componentDidMount() {
		document.getElementById('emblem').style.display = 'none';
	}
	componentWillUnmount() {
		document.getElementById('emblem').style.display = '';
	}
	render() {
		//https://rawgit.com/cotyembry/DjangoWebserver/master/simpleWebsite/App1/js/dist/bundle.js
			// <iframe style={styles.iframe} src='https://raw.githubusercontent.com/cotyembry/JamesHenderson/master/root/assets/application_final.pdf'>
		return (
			<iframe style={styles.iframe} src='https://rawgit.com/cotyembry/JamesHenderson/master/root/assets/application_final.pdf'>

			</iframe>
		)
	}

}

const styles = {
	iframe: {
		width: '100%',
		height: '100%',
		margin: '0px',
		padding: '0px',
		border: '0px'
	}
}
