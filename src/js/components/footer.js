import React, {Component} from 'react';
import {connect} from 'react-redux';
//import PropTypes from 'prop-types';


export class Footer extends Component {
	render() {
		return (
			<footer>
				<div>
					Written in 2017 by Dexter Richards
				</div>
			</footer>
		);
	}
}

//Footer.propTypes = {};


function mapStateToProps(state){
	return {};
}
function mapDispatchToProps(state){
	return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
