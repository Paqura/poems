import React from 'react';
import styled from 'styled-components';
import Textarea from 'react-textarea-autosize';

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

export default (props: any) => <CommentFormInput {...props.input} {...props} />;
