import {combineReducers} from 'redux';
import DisplayReducer from './reducer_display';
import WordGameReducer from './reducer_word_game';
import TimerReducer from './reducer_timer';

const rootReducer = combineReducers({
	display: DisplayReducer,
	word_game: WordGameReducer,
	timer: TimerReducer
});

export default rootReducer;
