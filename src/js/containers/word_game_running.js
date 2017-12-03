import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import LetterTiles from './letter_tiles';
import Timer from './timer';
import {stopGame, clearLetters} from '../actions/word_game';
import {stopTimer, startTimer} from '../actions/timer';
import {showWordGameGameOverScreen} from '../actions/display';


export class WordGameRunning extends Component {
	componentDidMount() {
		this.props.startTimer();
	}
	componentWillUnmount() {
		this.props.stopTimer();
	}

	render() {
		const letterTilesElement = <LetterTiles game_running={this.props.game_running} letters={this.props.letters} />;
		const onTimeoutFunc = () => {
			this.props.stopGame();
			this.props.clearLetters();
			this.props.showWordGameGameOverScreen();
			this.props.stopTimer();
		};

		return (
			<div>
				<Timer
					handleTimeout={onTimeoutFunc}
					startTimer={this.props.startTimer}
					status={this.props.timer_status}
				/>
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
	showWordGameGameOverScreen: PropTypes.func.isRequired,
	stopTimer: PropTypes.func.isRequired,
	startTimer: PropTypes.func.isRequired
};


function mapStateToProps(state) {
	return {
		timer_status: state.timer.timer_status,
		game_running: state.word_game.game_running,
		letters: state.word_game.letters
	};
}
const mapDispatchToProps = {
	stopGame,
	clearLetters,
	showWordGameGameOverScreen,
	stopTimer,
	startTimer
};

export default connect(mapStateToProps, mapDispatchToProps)(WordGameRunning);
