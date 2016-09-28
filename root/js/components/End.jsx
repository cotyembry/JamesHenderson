import React from 'react';

var End = React.createClass({
	render: function() {
		return (
			<div style={styles.one}>
				<ul style={styles.two}>
				{
					this.props.endListItems.map(function(sectionName) {
						styles.key++;
						return (<li style={styles.three.base, styles.three.width} key={styles.key}>{sectionName}</li>)
					});
				}
				</ul>
			</div>
		)
	}
});

var styles = {
	key: 0,
	one: {
		width: '100%',
		height: '50px'
	},
	two: {
		width: '100%',
		height: '100%'
	},
	three: {
		base: {
			height: '100%',
			background: 'black',
			listStyle: 'none'
		},
		get width() {
			let widthTS = $(document.documentElement).outerWidth() + 'px';
			return { width: widthTS }
		} 
	}
}

module.exports = End;
