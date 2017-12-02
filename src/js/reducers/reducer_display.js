import {
	SET_GAME_MODE,
	SET_SHOW_WORD_GAME_GAME_OVER_SCREEN
} from '../actions/display';
import {
	getSimpleSetState
} from '../common';


const INITIAL_STATE = {
	game_mode: null,

	show_word_game_game_over_screen: false
};


var simpleSets = {};
simpleSets[SET_GAME_MODE] = 'game_mode';
simpleSets[SET_SHOW_WORD_GAME_GAME_OVER_SCREEN] = 'show_word_game_game_over_screen';


export default function(state = INITIAL_STATE, action) {
	const actionType = action.type;

	if (simpleSets[actionType])
		return getSimpleSetState(simpleSets, action, state);

	switch (actionType) {
		default:
			return state;
	}
}
