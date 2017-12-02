import React from 'react';
import {Button} from 'react-bootstrap';


// min is inclusive, max is exclusive
export function getRandomInt(min, max) {
	return Math.floor(Math.random()*(max-min+1)+min);
}


// ---- common structure/layout functions ----
export function createLargeButton({text, onClickFunc, disabled}) {
	disabled = disabled || false;
	return <Button bsSize="large" onClick={onClickFunc} disabled={disabled}>{text}</Button>;
}


// for easily setting values in reducers
export function getSimpleSetState(simpleSets, action, state) {
	const newState = {...state};
	const key = simpleSets[action.type];
	newState[key] = action.payload;
	return newState;
}
