import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';
import {logoutAction} from 'src/ducks/auth';
import {TAction} from 'src/ducks/typedefs/action';

type TProps = {
	logoutAction: () => TAction,
};

const
	Logout = (props: TProps) => {
		useEffect(() => {
			props.logoutAction();
			window.location.href = '/';
		}, []);

		return <div>Logout...</div>;
	};

export default connect(null, {logoutAction, pushURL: push})(Logout);
