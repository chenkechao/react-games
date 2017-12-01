import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Nav, NavItem} from 'react-bootstrap';

import {setGameMode} from '../actions/display';
import {WORD_MODE, DEFAULT} from '../vars';


export class TopNav extends Component {
	createNavItem({text, game_mode}) {
		return <NavItem key={game_mode} eventKey={game_mode}>{text}</NavItem>;
	}

	getTopNavTabs() {
		var top_nav_tabs = {};
		top_nav_tabs[DEFAULT] = {
			text: 'Front Page'
		};
		top_nav_tabs[WORD_MODE] = {
			text: 'Word Game'
		};
		return top_nav_tabs;
	}

	getActiveKey({TOP_NAV_TABS, game_mode}) {
		if (TOP_NAV_TABS[game_mode])
			return game_mode;
		else
			return DEFAULT;
	}

	render() {
		const TOP_NAV_TABS = this.getTopNavTabs();
		const activeKey = this.getActiveKey({
			TOP_NAV_TABS,
			game_mode: this.props.game_mode
		});

		const handleSelect = eventKey => {
			this.props.setGameMode(eventKey);
		}

		const topNavKeys = Object.keys(TOP_NAV_TABS);
		var navItemArray = [];
		for (var i=0; i<topNavKeys.length; i++) {
			const game_mode = topNavKeys[i];
			const text = TOP_NAV_TABS[game_mode].text;
			navItemArray.push(this.createNavItem({game_mode, text}));
		}

		return (
			<Nav bsStyle="tabs" activeKey={activeKey} onSelect={handleSelect}>
				{navItemArray}
			</Nav>
		);
	}
}

TopNav.propTypes = {
	game_mode: PropTypes.string.isRequired,
	setGameMode: PropTypes.func.isRequired
};
TopNav.defaultProps = {
	game_mode: 'FRONT'
};


function mapStateToProps(state) {
	return {
		game_mode: state.display.game_mode
	};
}
const mapDispatchToProps = {
	setGameMode
};

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);
