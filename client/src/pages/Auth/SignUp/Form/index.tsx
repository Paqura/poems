import React from 'react';
import {reduxForm} from 'redux-form';
import {InputField} from 'src/components/shared/Form';
import MarginBlock from 'src/components/shared/MarginBlock';
import FormComponent from 'src/pages/Auth/shared/FormComponent';
import ErrorBox from 'src/pages/Auth/shared/ErrorBox';
import Header from 'src/pages/Auth/shared/Header';
import {renderInputField} from 'src/pages/Auth/helpers';

const
	Form = (props: any) => {
		const isMainActionDisabled = props.pristine || props.submitting || props.isLoading;

		return (
			<FormComponent.Wrapper>
				<Header title="Регистрация" />

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
						Отправить
					</FormComponent.Submit>
				</form>

				{props.errorMessage && <ErrorBox error={props.errorMessage} />}
			</FormComponent.Wrapper>
		);
	};

export default reduxForm<any, any>({
	form: 'sign-up',
})(Form);
