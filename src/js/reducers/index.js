import {combineReducers} from 'redux';
import DisplayReducer from './reducer_display';
import WordGameReducer from './reducer_word_game';

const rootReducer = combineReducers({
	display: DisplayReducer,
	word_game: WordGameReducer
});

export default rootReducer;
