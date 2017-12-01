import React from 'react';
import {Button} from 'react-bootstrap';


export function _createLargeButton({text, onClickFunc}) {
	return <Button bsSize="large" onClick={onClickFunc}>{text}</Button>;
}

export function getSimpleSetState(simpleSets, action, state) {
	const newState = {...state};
	const key = simpleSets[action.type];
	newState[key] = action.payload;
	return newState;
}
