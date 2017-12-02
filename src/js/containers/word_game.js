import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import WordGameGameOverScreen from '../containers/word_game_game_over';
import WordGameSetup from '../containers/word_game_setup';
import WordGameRunning from '../containers/word_game_running';
import {clearLetters, stopGame} from '../actions/word_game';


export class WordGame extends Component {
	componentWillUnmount() {
		this.props.clearLetters();
		this.props.stopGame();
	}

	render() {
		if (this.props.show_game_over_screen) {
			return <WordGameGameOverScreen />;
		} else if (this.props.game_running) {
			return <WordGameRunning />;
		} else {
			return <WordGameSetup />;
		}
	}
}

WordGame.propTypes = {
	show_game_over_screen: PropTypes.bool.isRequired,
	game_running: PropTypes.bool.isRequired,
	stopGame: PropTypes.func.isRequired
};


function mapStateToProps(state) {
	return {
		game_running: state.word_game.game_running,
		show_game_over_screen: state.display.show_word_game_game_over_screen
	};
}
const mapDispatchToProps = {
	clearLetters,
	stopGame
};

export default connect(mapStateToProps, mapDispatchToProps)(WordGame);
