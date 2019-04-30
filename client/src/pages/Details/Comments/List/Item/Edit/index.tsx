import React, {useEffect} from 'react';
import {reduxForm} from 'redux-form';
import {InputField} from 'src/components/shared/Form';
import MarginBlock from 'src/components/shared/MarginBlock';
import {CommentButton} from 'src/components/shared/Button';
import Input from 'src/pages/Details/Comments/shared/Input';
import {TFormProps} from 'src/typedefs/form';

type TProps = {
	oldValue: string,
} & TFormProps;

const formName = 'edit-comment';

const
	Edit = (props: TProps) => {
		useEffect(() => {
			props.initialize({comment: props.oldValue});
		}, []);

		return (
			<form onSubmit={props.handleSubmit}>
				<InputField
					name="comment"
					type="text"
					component={Input}
					placeholder="Комментарий"
				/>

				<MarginBlock top={16} bottom={32}>
					<CommentButton
						type="submit"
						disabled={props.pristine || props.submitting}
					>
						Сохранить
					</CommentButton>
				</MarginBlock>
			</form>
		);
	};

export default reduxForm<any, any>({
	form: formName,
})(Edit);
