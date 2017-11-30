import React, {Component} from 'react';
import {connect} from 'react-redux';


//import CreateAccount from '../components/create_account';


class TopNav extends Component {
	render() {
		return (
			<header>
				Header placeholder
			</header>
		);
	}
}

function mapStateToProps(state) {
	return {
		display: state.display
	};
}
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);
