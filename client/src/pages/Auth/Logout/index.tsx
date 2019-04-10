import React from 'react';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';
import {logoutAction} from 'src/ducks/auth';

class Logout extends React.Component<{logoutAction: Function, pushURL: Function}> {
	componentDidMount() {
		this.props.logoutAction();
		window.location.href = '/';
	}

	render() {
		return <div>Logout</div>;
	}
}

export default connect(null, {logoutAction, pushURL: push})(Logout);
