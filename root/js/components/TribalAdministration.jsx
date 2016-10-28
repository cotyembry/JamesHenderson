import React from 'react';

export default class TribalAdministration extends React.Component {
	render() {
		return (
			<div>
				<center>
					<h1>TribalAdministration</h1>
					<h3>Soverign Chickamauga Cherokee Tribe</h3>
				</center>

				<b>Tribal Chief</b>
				<br />
				<div style={styles.paddingLeft}>Albert McKay</div>

				<br />

				<b>Assistant Chief</b>
				<br />
				<div style={styles.paddingLeft}>Dwight Vincent</div>

				<br />

				<b>Council Members</b>
				<br />
				<div style={styles.paddingLeft}>
					<div>Kenneth Wilderson - (479)-477-2577</div>
					<div>Darrell Ritter - (918)-413-4468</div>
					<div>Jimmy Huett - (479)-970-4830</div>
					<div>Bob Dixon - (479)-355-0595</div>
					<div>James Henderson - (580)-421-3507</div>
					<div>Robert Jones - (479)-280-8168</div>
				</div>
			</div>
		)
	}
}

var styles = {
	paddingLeft: {
		paddingLeft: 25
	}
}


