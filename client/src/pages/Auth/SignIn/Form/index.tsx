import React from 'react';
import {reduxForm} from 'redux-form';
import {InputField} from 'src/components/shared/Form';
import MarginBlock from 'src/components/shared/MarginBlock';
import FormComponent from 'src/pages/Auth/shared/FormComponent';
import Header from 'src/pages/Auth/shared/Header';
import ErrorBox from 'src/pages/Auth/shared/ErrorBox';
import {renderInputField} from 'src/pages/Auth/helpers';

const
	Form = (props: any) => {
		const isMainActionDisabled = props.pristine || props.submitting || props.isLoading;

		return (
			<FormComponent.Wrapper>
				<Header title="Заполните обязательные поля" />

				<form onSubmit={props.handleSubmit}>
					<MarginBlock bottom={16}>
						<InputField
							autoFocus
							type="email"
							name="email"
							component={renderInputField}
							placeholder="Email"
							required={true}
						/>
					</MarginBlock>

					<MarginBlock bottom={16}>
						<InputField
							type="password"
							name="password"
							component={renderInputField}
							placeholder="Password"
							required={true}
						/>
					</MarginBlock>

					<FormComponent.Submit
						type="submit"
						disabled={isMainActionDisabled}
					>
						Подтвердить
					</FormComponent.Submit>
				</form>

				{props.errorMessage && <ErrorBox error={props.errorMessage} />}
			</FormComponent.Wrapper>
		);
	};

const EnhancedForm: any = reduxForm({
	form: 'sign-in',
})(Form);

export default EnhancedForm;
