import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import WordGameComponent from '../components/word_game';
//import {} from '../actions/seat_chart';


class WordGame extends Component {
	render() {
		return (
			<WordGameComponent />
		);
	}
}

function mapStateToProps(state) {
	return {};
}
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WordGame);
