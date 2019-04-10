import React from 'react';
import {reduxForm} from 'redux-form';
import {InputField} from 'src/components/shared/Form';

const
	Form = (props: any) =>
	<form onSubmit={props.handleSubmit}>
		<InputField
			autoFocus
			type="text"
			name="firstName"
			component="input"
			placeholder="First Name"
		/>

		<InputField
			type="text"
			name="lastName"
			component="input"
			placeholder="Last Name"
		/>

		<InputField
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
	form: 'sign-up',
})(Form);
