import {
	
} from '../actions/word_game';
import {
	getSimpleSetState
} from '../common';


const INITIAL_STATE = {
	letters: null
};


var simpleSets = {};
//simpleSets[SET_GAME_MODE] = 'game_mode';


export default function(state = INITIAL_STATE, action) {
	const actionType = action.type;

	if (simpleSets[actionType])
		return getSimpleSetState(simpleSets, action, state);

	switch (actionType) {
		default:
			return state;
	}
}
