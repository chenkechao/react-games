import React, {Component} from 'react';
//import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Button, ButtonGroup} from 'react-bootstrap';
import {VOWELS} from '../vars';


export class LetterTiles extends Component {
	getLetterTile({index, text}) {
		return <Button key={'letter-tile-'+index}>{text}</Button>;
	}
	getTilesArray() {
		var tilesArray = [];
		for (var i=0; i<this.props.letters.length; i++) {
			// create a constant that will not increment to use in the function
			const j = i;
			const letterIsVowel = VOWELS.indexOf(this.props.letters[j]) !== -1;
			const text = this.props.game_running? this.props.letters[j] :
				letterIsVowel? 'Vow.' : 'Cons.';
			const tile = this.getLetterTile({
				index: j,
				text
			});
			tilesArray.push(tile);
		}
		return tilesArray;
	}

	render() {
		const tilesArray = this.getTilesArray();

		return (
			<ButtonGroup>
				{tilesArray}
			</ButtonGroup>
		);
	}
}

LetterTiles.propTypes = {
	letters: PropTypes.array.isRequired,
	game_running: PropTypes.bool.isRequired
};

export default LetterTiles;
