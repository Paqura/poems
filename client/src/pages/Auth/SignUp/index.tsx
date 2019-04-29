import React, {useEffect} from 'react';
import Form from './Form';
import {push} from 'connected-react-router';
import {connect} from 'react-redux';
import {signUpRequest, moduleName} from 'src/ducks/auth';
import {TAction} from 'src/ducks/typedefs/action';
import Back from 'src/pages/Auth/shared/Back';
import {TState} from 'src/typedefs/state';
import {TAuth} from 'src/pages/Auth/typedefs/auth';

type TProps = {
	error: string | undefined,
	signUpRequest: (payload: TAction) => void,

	data: {
		currentUser: boolean | null,
		loading: boolean,
	},

	pushURL: (url: string) => void,
} & any;

const
	SignIn: React.FC<TProps> = (props: TProps) => {
		const
			signIn = (payload: TAction | any) => props.signUpRequest(payload);

		useEffect(() => {
			if(props.data.currentUser)
				location.href = '#/confirm';
		});

		return (
			<div>
				<Back />

				{!props.data.loading
					? <Form onSubmit={signIn} errorMessage={props.error} />
					: <span>Verifying...</span>}
			</div>
		);
	};

export default connect(
	(state: TState<TAuth>) => ({
		data: state[moduleName],
		error: state[moduleName].errorMessage,
	}),

	{
		signUpRequest,
		pushURL: push,
	},
)(SignIn);
