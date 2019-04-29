import React from 'react';
import UI, {AbsoluteStyle} from './styles';

export default (props: {
	children: React.ReactNode,
	hasAbsolute?: boolean,
}) => (
	<UI.Centered style={props.hasAbsolute && AbsoluteStyle}>
		{props.children}
	</UI.Centered>
);
