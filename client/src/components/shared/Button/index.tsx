import React, {CSSProperties} from 'react';
import styled from 'styled-components';

const Button: any = styled.button`
	cursor: pointer;
	background: none;
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
`;

type TProps = {
	children: any,
	onClick: Function,
};

export default(props: TProps) => (
	<Button onClick={props.onClick}>
		{props.children}
	</Button>
);
