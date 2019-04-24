import React from 'react';
import {reduxForm} from 'redux-form';
import {InputField} from 'src/components/shared/Form';

const
	CommentForm = (props: any) => {
		return (
			<form onSubmit={props.handleSubmit}>
				<InputField
					name="comment"
					type="text"
					component="input"
					placeholder="Комментарий"
				/>

				<button
					type="button"
					disabled={props.pristine || props.submitting}
				>
					Добавить комментарий
				</button>
			</form>
		);
	};

export default reduxForm({
	form: 'add-comment',
})(CommentForm);
