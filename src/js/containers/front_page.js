import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ButtonToolbar} from 'react-bootstrap';
import FrontPageComponent from '../components/front_page';
import {setGameMode} from '../actions/display';
import {_createLargeButton} from '../common';
import {WORD_MODE} from '../vars';


class FrontPageContainer extends Component {
	render() {
		const wordButtonClickFunc = () => {
			this.props.setGameMode(WORD_MODE);
		};
		const wordButtonElement = this.props.createGameButton({
			text: "Word Game",
			onClickFunc: wordButtonClickFunc
		});

		const otherButtonElement = this.props.createGameButton({
			text: "Coming Soon!",
			onClickFunc: () => {}
		});

		const gameButtonElement = (
			<ButtonToolbar>
				{wordButtonElement}
				{otherButtonElement}
			</ButtonToolbar>
		);

		return (
			<FrontPageComponent
				gameButtonElement={gameButtonElement}
			/>
		);
	}
}

FrontPageContainer.propTypes = {
	setGameMode: PropTypes.func.isRequired,
	createGameButton: PropTypes.func.isRequired
};


const mapStateToProps = state => {
	return {};
}
const mapDispatchToProps = {
	setGameMode
};
const mergeProps = (stateProps, dispatchProps, ownProps) => ({
	...stateProps,
	...dispatchProps,
	...ownProps,
	createGameButton: _createLargeButton
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(FrontPageContainer);
