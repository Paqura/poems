import React from 'react';
import {reduxForm} from 'redux-form';
import {InputField} from 'src/components/shared/Form';
import MarginBlock from 'src/components/shared/MarginBlock';
import FormComponent from 'src/pages/Auth/shared/FormComponent';
import ErrorBox from 'src/pages/Auth/shared/ErrorBox';
import Header from 'src/pages/Auth/shared/Header';
import {renderInputField} from 'src/pages/Auth/helpers';
import {TFormProps} from 'src/pages/Auth/typedefs/form';

type TProps = {errorMessage?: string};

const
	Form: React.FC<TProps & TFormProps> = (props: TProps & TFormProps) => {
		const isMainActionDisabled = props.pristine || props.submitting;

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

export default reduxForm<{}, any, string>({
	form: 'sign-up',
})(Form);
