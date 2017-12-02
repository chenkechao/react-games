//import axios from 'axios';
//import qs from 'qs';

// my naming convention for reducer actions is to start the action name with the name of the file
// this helps prevent action collisions
export const SET_GAME_MODE = 'DISPLAY_HIDE_ALL_MODALS';
export const SET_SHOW_WORD_GAME_GAME_OVER_SCREEN = 'DISPLAY_SET_SHOW_WORD_GAME_GAME_OVER_SCREEN';


export function setGameMode(payload) {
	return {
		type: SET_GAME_MODE,
		payload
	};
}

export function showWordGameGameOverScreen() {
	return {
		type: SET_SHOW_WORD_GAME_GAME_OVER_SCREEN,
		payload: true
	};
}
export function hideWordGameGameOverScreen(payload) {
	return {
		type: SET_SHOW_WORD_GAME_GAME_OVER_SCREEN,
		payload: false
	};
}


/*export function getOrgTypes(user_id, user_access_token) {
	const values = {user_id, user_access_token};
	const request = axios.post(`${API_URL}?action=getOrgTypeList`, qs.stringify(values));
	return {
		type: GET_ORG_TYPES,
		payload: request
	};
}*/
