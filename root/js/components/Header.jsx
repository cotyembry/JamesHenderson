import React from 'react';

var Header = React.createClass({
	render: function() {
		return (
			<div id="parent-header" style={parentHeader}>

			</div>
		)
	}
});

var parentHeader = {
	width: '100%',
	height: '100%'
}

module.exports = Header;