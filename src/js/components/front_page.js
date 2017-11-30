import React, {Component} from 'react';
import PropTypes from 'prop-types';


class FrontPageComponent extends Component {
	render() {
		const {wordButtonElement, otherButtonElement} = this.props;
		return (
			<div>
				<h1>Welcome!</h1>
				<p>To get started, pick a game below.</p>
				{wordButtonElement}
				{otherButtonElement}
			</div>
		);
	}
}

FrontPageComponent.propTypes = {
	wordButtonElement: PropTypes.element.isRequired,
	otherButtonElement: PropTypes.element.isRequired
};

export default FrontPageComponent;
