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
		return (
			<iframe style={styles.iframe} src='../../assets/application_final.pdf'>

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
