import React from 'react';
import Form from './Form';
import {connect} from 'react-redux';
import {signInRequest, moduleName} from 'src/ducks/auth/sign-in';
import {TAction} from 'src/ducks/typedefs/action';

const
	SignIn: any = (props: {
		signInRequest: (payload: TAction) => void,

		data: {
			loading: boolean,
		},
	}) => {
		const
			signIn = (payload: TAction | any) => props.signInRequest(payload);

		return (
			<div>
				{!props.data.loading
					? <Form onSubmit={signIn} />
					: <span>Loading...</span>}
			</div>
		);
	};

export default connect(
	(state: any) => ({
		data: state[moduleName]['data'],
	}),

	{signInRequest},
)(SignIn);

