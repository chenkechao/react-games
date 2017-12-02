import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Well} from 'react-bootstrap';
import WordGameSetupComponent from '../components/word_game_setup';
//import WordGameComponent from '../components/word_game';
import LetterTiles from '../containers/letter_tiles';
import {addLetter, clearLetters, startGame, stopGame} from '../actions/word_game';
import {getRandomInt, createLargeButton} from '../common';


import {CONSONANTS, VOWELS} from '../vars';


export class WordGameSetup extends Component {
	constructor(props) {
		super(props);
		this.timer = null;
	}

	getRandomLetter(LETTER_SET) {
		const index = getRandomInt(0, LETTER_SET.length - 1);
		return LETTER_SET[index];
	}
	getConsonant() {
		return this.getRandomLetter(CONSONANTS);
	}
	getVowel() {
		return this.getRandomLetter(VOWELS);
	}

	createGetVowelButton(buttonsDisabled) {
		const onVowelButtonClick = () => {
			const vowel = this.getVowel();
			this.props.addLetter(vowel);
		};
		return createLargeButton({
			text: "Get a vowel!",
			onClickFunc: onVowelButtonClick,
			disabled: buttonsDisabled
		});
	}

	createGetConsonantButton(buttonsDisabled) {
		const onConsonantButtonClick = () => {
			const consonant = this.getConsonant();
			this.props.addLetter(consonant);
		};
		return createLargeButton({
			text: "Get a consonant!",
			onClickFunc: onConsonantButtonClick,
			disabled: buttonsDisabled
		});
	}

	createStartButton() {
		const onStartButtonClick = () => {
			this.props.startGame();
		};
		return createLargeButton({
			text: "Start!",
			onClickFunc: onStartButtonClick
		});
	}


	render() {
		const {letters} = this.props;
		// explicitly defining true or false to ensure it will always be a pure boolean instead of a truthy/falsy value
		const buttonsDisabled = letters && letters.length >= 10? true : false;
		const letterTilesElement = letters && letters.length > 0?
			<LetterTiles game_running={this.props.game_running} letters={letters} /> : null;

		// pulling game_running out of props and assigning it to a variable will make it easier
		// 	to update the logic defining if the game is running later, if needed
		const gameRunning = this.props.game_running;
		const getVowelButton = this.createGetVowelButton(buttonsDisabled);
		const getConsonantButton = this.createGetConsonantButton(buttonsDisabled);
		const startButton = buttonsDisabled? this.createStartButton() : null;

		return (
			<WordGameSetupComponent
				getVowelButton={getVowelButton}
				getConsonantButton={getConsonantButton}
				startButton={startButton}
				gameRunning={gameRunning}
			>
				<Well>
					{letterTilesElement}
				</Well>
			</WordGameSetupComponent>
		);
	}
}

WordGameSetup.propTypes = {
	letters: PropTypes.array,
	game_running: PropTypes.bool.isRequired,
	clearLetters: PropTypes.func.isRequired,
	addLetter: PropTypes.func.isRequired,
	startGame: PropTypes.func.isRequired,
	stopGame: PropTypes.func.isRequired
};


function mapStateToProps(state) {
	return {
		letters: state.word_game.letters,
		game_running: state.word_game.game_running
	};
}
const mapDispatchToProps = {
	addLetter,
	clearLetters,
	startGame,
	stopGame
};


export default connect(mapStateToProps, mapDispatchToProps)(WordGameSetup);
