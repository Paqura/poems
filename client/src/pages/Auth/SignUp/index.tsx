import React, {useEffect} from 'react';
import Form from './Form';
import {push} from 'connected-react-router';
import {connect} from 'react-redux';
import {signUpRequest, moduleName} from 'src/ducks/auth';
import {TAction} from 'src/ducks/typedefs/action';
import Back from 'src/pages/Auth/shared/Back';

const
	SignIn: any = (props: {
		error: string | null,
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
		});

		return (
			<div>
				<Back />

				{props.error && <span>{props.error}</span>}

				{!props.data.loading
					? <Form onSubmit={signIn} />
					: <span>Verifying...</span>}
			</div>
		);
	};

export default connect(
	(state: any) => ({
		data: state[moduleName],
		error: state[moduleName].errorMessage,
	}),

	{
		signUpRequest,
		pushURL: push,
	},
)(SignIn);
