import {
	ADD_LETTER,
	CLEAR_LETTERS,

	SET_GAME_RUNNING
} from '../actions/word_game';
import {
	getSimpleSetState
} from '../common';


const INITIAL_STATE = {
	letters: null,
	game_running: false
};


var simpleSets = {};
simpleSets[SET_GAME_RUNNING] = 'game_running';


export default function(state = INITIAL_STATE, action) {
	const actionType = action.type;

	if (simpleSets[actionType])
		return getSimpleSetState(simpleSets, action, state);

	switch (actionType) {
		case ADD_LETTER:
			var newState = {...state};
			var newLetters = newState.letters? [...newState.letters] : [];
			newLetters.push(action.payload);
			newState.letters = newLetters;
			return newState;

		case CLEAR_LETTERS:
			newState = {...state};
			newState.letters = null;
			return newState;

		default:
			return state;
	}
}
