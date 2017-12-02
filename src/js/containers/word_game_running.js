import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import LetterTiles from './letter_tiles';
import Timer from './timer';
import {stopGame, clearLetters} from '../actions/word_game';
import {showWordGameGameOverScreen} from '../actions/display';


export class WordGameRunning extends Component {
	render() {
		const letterTilesElement = <LetterTiles game_running={this.props.game_running} letters={this.props.letters} />;
		const onTimeoutFunc = () => {
			this.props.stopGame();
			this.props.clearLetters();
			this.props.showWordGameGameOverScreen();
		};

		return (
			<div>
				<Timer handleTimeout={onTimeoutFunc} />
				<br />
				word game running
				<br />
				{letterTilesElement}
			</div>
		);
	}
}

WordGameRunning.propTypes = {
	game_running: PropTypes.bool.isRequired,
	letters: PropTypes.array.isRequired,
	stopGame: PropTypes.func.isRequired,
	clearLetters: PropTypes.func.isRequired,
	showWordGameGameOverScreen: PropTypes.func.isRequired
};


function mapStateToProps(state) {
	return {
		game_running: state.word_game.game_running,
		letters: state.word_game.letters
	};
}
const mapDispatchToProps = {
	stopGame,
	clearLetters,
	showWordGameGameOverScreen
};

export default connect(mapStateToProps, mapDispatchToProps)(WordGameRunning);
