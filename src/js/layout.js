import React, {Component} from 'react';
import {connect} from 'react-redux';

//import {getAnnouncements} from './actions/display';
import TopNav from './containers/top_nav';
import Footer from './components/footer';


/*export function _loadAnnouncements({user_id, user_access_token, getAnnouncements, announcement_ids}) {
	var values = announcement_ids? {...announcement_ids} : {};
	values.user_id = user_id;
	values.user_access_token = user_access_token;
	getAnnouncements(values)
	.then(response => {
		const responseData = response.payload.data;
		if (parseInt(responseData.is_successful, 10) === 1) {
			console.log("announcement data: ", responseData.data);
		} else {
			console.error("Could not load announcements: ", responseData.error);
		}
	});
}*/


class Layout extends Component {
	render() {
		return (
			<div>
				<TopNav />
					{this.props.children}
				<Footer />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {};
}
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
