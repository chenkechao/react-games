import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {GAME_LENGTH_IN_SECONDS} from '../vars';


export class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			seconds: props.seconds || GAME_LENGTH_IN_SECONDS
		}
	}

	componentDidMount() {
		const timeoutId = setTimeout(this.tick.bind(this), 1000);
		this.setState({timeoutId});
	}
	componentWillUnmount() {
		clearTimeout(this.state.timeoutId);
	}

	tick() {
		const _seconds = this.state.seconds - 1;
		this.setState({seconds: _seconds});
		if (_seconds === 0)
			this.props.handleTimeout();
		else {
			setTimeout(this.tick.bind(this), 1000);
		}
	}

	render() {
		return (
			<small>
				{this.state.seconds}
			</small>
		);
	}
}

Timer.propTypes = {
	handleTimeout: PropTypes.func.isRequired
};

export default Timer;
