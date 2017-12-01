import React, {Component} from 'react';
import {connect} from 'react-redux';
//import PropTypes from 'prop-types';


export class Footer extends Component {
	render() {
		return (
			<footer className="navbar-fixed-bottom">
				<div className="container">
					<div className="row">
						<p>See the code on <a href="https://github.com/ken92/react-games" target="_blank">GitHub!</a></p>
					</div>
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
