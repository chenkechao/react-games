import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import {connect} from 'react-redux';
//import cookie from 'react-cookie';
//import Script from 'react-load-script';


import Layout from '../layout';
import PageContents from './page_contents';


// anything that needs to be done once on site load goes in here
// i.e., loading cookies, loading external JS scripts, etc
class App extends Component {
	render() {
		return (
			<Layout>
				<PageContents />
			</Layout>
		);
	}
}

function mapStateToProps(state) {
	return {};
}
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
