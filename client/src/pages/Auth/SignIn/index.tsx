import React from 'react';
import Form from './Form';
import {connect} from 'react-redux';
import {signInRequest, moduleName} from 'src/ducks/auth';
import {TAction} from 'src/ducks/typedefs/action';

type TProps = {
	signInRequest: (payload: TAction, prevLocation: string | undefined) => void,

	data: {
		loading: boolean,
	},

	location: {
		state: string | undefined,
	},
} & any;

const
	SignIn: React.FC<TProps> = (props: TProps) => {
		const
			signIn = (payload: TAction | any) =>
				props.signInRequest(payload, props.location.state);

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

	{signInRequest},
)(SignIn);
