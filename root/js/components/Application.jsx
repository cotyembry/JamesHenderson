import React from 'react';
import ReactDOM from 'react-dom';

export default class Application extends React.Component {
	render() {
		return (
			<div style={styles.application}>
				<h1>Hi!</h1>
			</div>
		)
	}
}

var styles = {
	application: {
		width: '100%',
		height: 1000,
		marginTop: 425
	}
}
