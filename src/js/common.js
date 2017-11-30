export function getSimpleSetState(simpleSets, action, state) {
	const newState = {...state};
	const key = simpleSets[action.type];
	newState[key] = action.payload;
	return newState;
}
