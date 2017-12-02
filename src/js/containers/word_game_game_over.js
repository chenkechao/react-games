import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {clearLetters, stopGame} from '../actions/word_game';
import {hideWordGameGameOverScreen, setGameMode} from '../actions/display';
import {createLargeButton} from '../common';
import {DEFAULT} from '../vars';


export class WordGame extends Component {
	componentWillUnmount() {
		this.props.hideWordGameGameOverScreen();
	}

	render() {
		const score = 'TODO';
		const restartButton = createLargeButton({
			text: "Sure!",
			onClickFunc: this.props.hideWordGameGameOverScreen
		});
		const backToFrontPageButton = createLargeButton({
			text: "No thanks",
			onClickFunc: () => {
				this.props.setGameMode(DEFAULT);
			}
		});

		return (
			<div>
				<h2>Game over!</h2>
				<p>Your score was: {score}</p>
				<br />
				<p>Try again?</p>
				{restartButton}
				{backToFrontPageButton}
			</div>
		);
	}
}

WordGame.propTypes = {
	show_game_over_screen: PropTypes.bool.isRequired,
	game_running: PropTypes.bool.isRequired,
	stopGame: PropTypes.func.isRequired,
	setGameMode: PropTypes.func.isRequired
};


function mapStateToProps(state) {
	return {
		game_running: state.word_game.game_running,
		show_game_over_screen: state.display.show_word_game_game_over_screen
	};
}
const mapDispatchToProps = {
	clearLetters,
	stopGame,
	setGameMode,
	hideWordGameGameOverScreen
};

export default connect(mapStateToProps, mapDispatchToProps)(WordGame);
