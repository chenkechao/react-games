import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Panel, Button} from 'react-bootstrap';
import {GAME_LENGTH_IN_SECONDS} from '../vars';


export class WordGameSetupComponent extends Component {
	constructor(...args) {
		super(...args);
		this.state = {
			instructions_open: false
		};
	}

	render() {
		const {getConsonantButton, getVowelButton, startButton} = this.props;

		return (
			<div>
				<Button onClick={() => this.setState({instructions_open: !this.state.instructions_open})}>
					Instructions
				</Button>
				<Panel collapsible expanded={this.state.instructions_open}>
					You get ten total letters.  To get these letters, you get to decide if you want a vowel or consonant
					by clicking the respective buttons until you get to ten.  With these letters, you will have {GAME_LENGTH_IN_SECONDS} seconds
					to make as many words as you can.

					<br /><br />

					The API used in this game is actually a free Russian-English dictionary, because it has no API limits.
					As a result, you might pick some words that don't exist in this dictionary.  Sorry about that!
				</Panel>

				{this.props.children}

				{getVowelButton}
				{getConsonantButton}
				<br />
				{startButton}
			</div>
		);
	}
}

WordGameSetupComponent.propTypes = {
	startButton: PropTypes.element,
	getConsonantButton: PropTypes.element.isRequired,
	getVowelButton: PropTypes.element.isRequired
};

export default WordGameSetupComponent;
