//import axios from 'axios';
//import qs from 'qs';

export const SET_GAME_MODE = 'DISPLAY_HIDE_ALL_MODALS';


export function setGameMode(payload) {
	return {
		type: SET_GAME_MODE,
		payload
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