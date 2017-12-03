import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {GAME_LENGTH_IN_SECONDS, TIMER_RUNNING, TIMER_RESET} from '../vars';


export class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			seconds: null
		};
	}

	componentDidUpdate() {
		if (this.props.status === TIMER_RESET) {
			this.props.startTimer();
			this.seconds = this.props.seconds || GAME_LENGTH_IN_SECONDS;
			this.setState({seconds: this.seconds});
		}
		else if (this.props.status === TIMER_RUNNING) {
			this.tick();
		}
	}

	componentDidMount() {
		this.seconds = this.props.seconds || GAME_LENGTH_IN_SECONDS;
		this.setState({seconds: this.seconds});
	}
	componentWillUnmount() {
		clearTimeout(this.timeoutId);
	}

	tick() {
		if (this.props.status === 'stop') {
			this.setState({timeoutId: null});
			return;
		}

		if (this.seconds <= 0) {
			this.props.handleTimeout();
		} else {
			const _seconds = this.seconds - 1;
			this.seconds = _seconds;
			this.timeoutId = setTimeout(() => {
				this.setState({seconds: _seconds});
			}, 1000);
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
	status: PropTypes.string.isRequired,
	startTimer: PropTypes.func.isRequired,
	handleTimeout: PropTypes.func.isRequired
};

export default Timer;
