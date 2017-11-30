import {combineReducers} from 'redux';
import DisplayReducer from './reducer_display';

const rootReducer = combineReducers({
	display: DisplayReducer
});

export default rootReducer;
