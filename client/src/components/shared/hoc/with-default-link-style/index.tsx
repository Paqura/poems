import React from 'react';

type TProps = {
	activeStyle?: Object,
	to: string,
	children?: any,
	as?: any,
	ownstyle?: Object,
};

const
	DefaultStyle = {
		textDecoration: 'none',
		color: 'inherit',
		fontSize: 'inherit',
	};

export default (Component: any) => React.forwardRef((props: TProps, ref) => (
	<Component
		innerRef={ref}
		{...props}
		style={{...DefaultStyle, ...props.ownstyle}}
	>
		{props.children}
	</Component>
));
