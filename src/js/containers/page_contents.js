import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {WORD_MODE} from '../vars';

import WordGame from './word_game';
import FrontPage from './front_page';


class PageContents extends Component {
	getContentsElement() {
		switch(this.props.game_mode) {
			case WORD_MODE:
				return <WordGame />;

			default:
				return <FrontPage />;
		}
	}

	render() {
		return this.getContentsElement();
	}
}

PageContents.propTypes = {
	game_mode: PropTypes.string
};


function mapStateToProps(state) {
	return {
		game_mode: state.display.game_mode
	};
}
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PageContents);
