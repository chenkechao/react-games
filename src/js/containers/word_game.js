import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import {connect} from 'react-redux';
//import {} from '../actions/seat_chart';


class WordGame extends Component {
	render() {
		return (
			<div>
				WORD GAME PLACEHOLDER
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {};
}
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WordGame);
