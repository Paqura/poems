import React from 'react';
import {reduxForm} from 'redux-form';
import {InputField} from 'src/components/shared/Form';
import MarginBlock from 'src/components/shared/MarginBlock';
import FormComponent from 'src/pages/Auth/shared/FormComponent';

const renderInputField = (props: any) => <FormComponent.Field {...props.input} {...props}/>;

const
	Form = (props: any) => {
		const isMainActionDisabled = props.pristine || props.submitting || props.isLoading;

		return (
			<FormComponent.Wrapper>
				<header>
					<h2>Регистрация</h2>
				</header>

				<form onSubmit={props.handleSubmit}>
					<MarginBlock bottom={16}>
						<InputField
							autoFocus
							type="text"
							name="firstName"
							component={renderInputField}
							placeholder="First Name"
						/>
					</MarginBlock>

					<MarginBlock bottom={16}>
						<InputField
							type="text"
							name="lastName"
							component={renderInputField}
							placeholder="Last Name"
						/>
					</MarginBlock>

					<MarginBlock bottom={16}>
						<InputField
							type="email"
							name="email"
							component={renderInputField}
							placeholder="Email"
						/>
					</MarginBlock>

					<MarginBlock bottom={16}>
						<InputField
							type="password"
							name="password"
							component={renderInputField}
							placeholder="Password"
						/>
					</MarginBlock>

					<FormComponent.Submit
						type="submit"
						disabled={isMainActionDisabled}
					>
						Submit
					</FormComponent.Submit>
				</form>
			</FormComponent.Wrapper>
		);
	};


export default reduxForm({
	form: 'sign-up',
})(Form);
