import React from 'react';
import {reduxForm } from 'redux-form'
import {InputField} from 'src/components/shared/Form';

const
	Form = (props: any) =>
	<form onSubmit={props.handleSubmit}>
		<InputField
			autoFocus
			type="email"
			name="email"
			component="input"
			placeholder="Email"
		/>

		<InputField
			type="password"
			name="password"
			component="input"
			placeholder="Password"
		/>
		<button type="submit">Submit</button>
	</form>;

export default reduxForm({
	form: 'sign-in',
})(Form);
