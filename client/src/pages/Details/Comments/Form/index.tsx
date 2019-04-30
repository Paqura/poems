import React from 'react';
import {reduxForm} from 'redux-form';
import {InputField} from 'src/components/shared/Form';
import MarginBlock from 'src/components/shared/MarginBlock';
import {CommentButton} from 'src/components/shared/Button';
import Input from 'src/pages/Details/Comments/shared/Input';

const
	CommentForm: any = (props: any) => (
		<form onSubmit={props.handleSubmit}>
			<header>
				<h3>Ваш комментарий</h3>
			</header>

			<InputField
				name="text"
				type="text"
				component={Input}
				placeholder="Комментарий"
			/>

			<MarginBlock top={16} bottom={32}>
				<CommentButton
					type="submit"
					disabled={props.pristine || props.submitting || props.isLoading}
				>
					Добавить комментарий
				</CommentButton>
			</MarginBlock>
		</form>
	);

const ExportForm: any =  reduxForm({
	form: 'add-comment',
})(CommentForm);

export default ExportForm;
