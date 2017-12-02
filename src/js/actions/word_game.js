export const ADD_LETTER = 'WORD_GAME_ADD_LETTER';
export const CLEAR_LETTERS = 'WORD_GAME_CLEAR_LETTERS';

export const SET_GAME_RUNNING = 'WORD_GAME_SET_GAME_RUNNING';

export const SET_SECONDS = 'WORD_GAME_SET_SECONDS';


export function addLetter(letter) {
	return {
		type: ADD_LETTER,
		payload: letter
	};
}
export function clearLetters() {
	return {
		type: CLEAR_LETTERS
	};
}


export function startGame() {
	return {
		type: SET_GAME_RUNNING,
		payload: true
	};
}
export function stopGame() {
	return {
		type: SET_GAME_RUNNING,
		payload: false
	};
}
