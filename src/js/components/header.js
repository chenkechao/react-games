import React, {Component} from 'react';
import {PageHeader} from 'react-bootstrap';


export class Header extends Component {
	render() {
		return (
			<PageHeader>
				<div className="container">
					React Games <small>by Dexter Richards</small>
				</div>
			</PageHeader>
		);
	}
}

export default Header;
