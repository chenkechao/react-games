import React, {Component} from 'react';
import {PageHeader} from 'react-bootstrap';


export class Header extends Component {
	render() {
		return (
			<PageHeader>
				React Games <small>by Dexter Richards</small>
			</PageHeader>
		);
	}
}

export default Header;
