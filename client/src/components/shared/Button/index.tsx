import React from 'react';
import styled from 'styled-components';

export const Button: any = styled.button`
	cursor: pointer;
	background: none;
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const CommentButton = styled(Button)`
	background-color: #7c9fff;
	padding: 16px;
	border-radius: 2px;
	color: #ffffff;
	font-size: 18px;

	&:not(:disabled):hover {
		opacity: 0.7;
	}

	&:disabled {
		cursor: not-allowed;
		background-color: #edf2ff;
	}
`;

type TProps = {
	type?: string,
	children: any,
	disabled?: boolean,
	onClick?: Function,
};

export default(props: TProps) => (
	<Button disable={props.disabled} onClick={props.onClick}>
		{props.children}
	</Button>
);
