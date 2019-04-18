import React from 'react';

const
	DefaultStyle = {
		textDecoration: 'none',
		color: '#000000',
	};

export default (Component: any) => (props: {
	activeStyle?: Object,
	to: string,
	children?: any,
}) => (
	<Component
		{...props}
		style={DefaultStyle}
	>
		{props.children}
	</Component>
);
