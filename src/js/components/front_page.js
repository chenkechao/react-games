import React, {Component} from 'react';
import PropTypes from 'prop-types';


class FrontPageComponent extends Component {
	render() {
		const {gameButtonElement} = this.props;
		return (
			<div>
				<h1>Welcome!</h1>
				<p>To get started, pick a game below.</p>
				{gameButtonElement}
			</div>
		);
	}
}

FrontPageComponent.propTypes = {
	gameButtonElement: PropTypes.element.isRequired
};

export default FrontPageComponent;
