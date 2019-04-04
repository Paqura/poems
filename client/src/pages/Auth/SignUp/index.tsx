import React, {useEffect} from 'react';
import Form from './Form';
import {push} from 'connected-react-router';
import {connect} from 'react-redux';
import {signUpRequest, moduleName} from 'src/ducks/auth';
import {TAction} from 'src/ducks/typedefs/action';

const
	SignIn: any = (props: {
		signUpRequest: (payload: TAction) => void,

		data: {
			currentUser: boolean | null,
			loading: boolean,
		},

		pushURL: (url: string) => void,
	}) => {
		const
			signIn = (payload: TAction | any) => props.signUpRequest(payload);

		useEffect(() => {
			if(props.data.currentUser)
				location.href = '#/confirm';
		})

		return (
			<div>
				{!props.data.loading
					? <Form onSubmit={signIn} />
					: <span>Verifying...</span>}
			</div>
		);
	};

export default connect(
	(state: any) => ({
		data: state[moduleName],
	}),

	{
		pushURL: push,
		signUpRequest
	},
)(SignIn);

