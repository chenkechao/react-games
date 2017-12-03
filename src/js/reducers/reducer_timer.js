import {
	STOP_TIMER,
	START_TIMER,
	RESET_TIMER
} from '../actions/timer';
import {
	getSimpleSetState
} from '../common';
import {
	TIMER_STOPPED,
	TIMER_RUNNING,
	TIMER_RESET
} from '../vars';


const INITIAL_STATE = {
	timer_status: TIMER_RUNNING
};


var simpleSets = {};


export default function(state = INITIAL_STATE, action) {
	const actionType = action.type;

	if (simpleSets[actionType])
		return getSimpleSetState(simpleSets, action, state);

	switch (actionType) {
		case START_TIMER:
			var newState = {...state};
			newState.timer_status = TIMER_RUNNING;
			return newState;

		case STOP_TIMER:
			newState = {...state};
			newState.timer_status = TIMER_STOPPED;
			return newState;

		case RESET_TIMER:
			newState = {...state};
			newState.timer_status = TIMER_RESET;
			return newState;

		default:
			return state;
	}
}
