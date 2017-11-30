import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FrontPageComponent from '../components/front_page';
import {setGameMode} from '../actions/display';
import {WORD_MODE} from '../vars';


class FrontPageContainer extends Component {
	render() {
		const wordButtonClickFunc = () => {
			console.log("set game mode");
			this.props.setGameMode(WORD_MODE);
		};
		const wordButtonElement = <button onClick={wordButtonClickFunc}>Word Game</button>;

		const otherButtonElement = <button>Coming Soon!</button>;

		return (
			<FrontPageComponent
				wordButtonElement={wordButtonElement}
				otherButtonElement={otherButtonElement}
			/>
		);
	}
}

FrontPageContainer.propTypes = {
	setGameMode: PropTypes.func.isRequired
};


function mapStateToProps(state) {
	return {};
}
const mapDispatchToProps = {
	setGameMode
};

export default connect(mapStateToProps, mapDispatchToProps)(FrontPageContainer);
