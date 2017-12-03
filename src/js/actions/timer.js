export const RESET_TIMER = 'TIMER_RESET_TIMER';
export const STOP_TIMER = 'TIMER_STOP_TIMER';
export const START_TIMER = 'TIMER_START_TIMER';


export function resetTimer() {
	console.log("reset timer");
	return {
		type: RESET_TIMER
	};
}
export function stopTimer() {
	console.log("stop timer");
	return {
		type: STOP_TIMER
	};
}
export function startTimer() {
	console.log("start timer");
	return {
		type: START_TIMER
	};
}
