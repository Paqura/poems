import React, {useRef} from 'react';
import {reduxForm} from 'redux-form';
import {InputField} from 'src/components/shared/Form';
import Textarea from 'react-textarea-autosize';
import MarginBlock from 'src/components/shared/MarginBlock';
import styled from 'styled-components';
import {CommentButton} from 'src/components/shared/Button';

const CommentFormInput = styled(Textarea)`
	border: 2px solid #000000;
	width: 100%;
	display: flex;
	padding: 8px;
	min-height: 48px;
	transition: border-color 200ms;
	border-radius: 2px;

	&:hover {
		border-color: #7c9fff;
	}

	&:focus {
		outline: none;
		border-color: #7c9fff;
	}
`;

const renderTextarea = (props: any) => <CommentFormInput {...props.input}/>;

const
	CommentForm: any = (props: any) => (
		<form onSubmit={props.handleSubmit}>
			<header>
				<h3>Ваш комментарий</h3>
			</header>

			<InputField
				name="text"
				type="text"
				component={renderTextarea}
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
