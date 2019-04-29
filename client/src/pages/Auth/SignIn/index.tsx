import React from 'react';
import Form from './Form';
import {connect} from 'react-redux';
import {signInRequest, moduleName} from 'src/ducks/auth';
import {TAction} from 'src/ducks/typedefs/action';
import Back from 'src/pages/Auth/shared/Back';
import {TState} from 'src/typedefs/state';
import {TAuth} from 'src/pages/Auth/typedefs/auth';
import GenericSpinner from 'src/pages/GenericSpinner';

type TProps = {
	signInRequest: (payload: TAction, prevLocation: string | undefined) => TAction,

	data: {
		loading: boolean,
	},

	error: string | undefined,

	location: {
		state: string | undefined,
	},
} & any;

const
	SignIn: React.FC<TProps> = (props: TProps) => {
		const signIn = (payload: TAction | any) => props.signInRequest(payload, props.location.state);

		return (
			<div>
				<Back />

				{!props.data.loading
					? <Form onSubmit={signIn} errorMessage={props.error} />
					: <GenericSpinner />}
			</div>
		);
	};

export default connect(
	(state: TState<TAuth>) => ({
		data: state[moduleName],
		error: state[moduleName].errorMessage,
	}),

	{signInRequest},
)(SignIn);
