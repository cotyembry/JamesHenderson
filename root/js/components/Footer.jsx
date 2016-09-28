import React from 'react';
import ReactDOM from 'react-dom';

var Footer = React.createClass({
	render: function() {
		return (
			<div style={styles.parent}>
				<div style={styles.one}>
					This is the footer

				</div>
				<div style={styles.two}>
					Coty
				</div>
			</div>
		)
	}
});

var styles = {
	parent: {
		width: '100%',
		height: '20%'
	},
	one: {
		width: '100%',
		height: '500px',
		background: '#ffffff'
	},
	two: {
		width: '100%',
		height: '20%'
	}
}

module.exports = Footer;
