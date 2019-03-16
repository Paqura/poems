import React from 'react';
import {AbsoluteStyle, Centered} from './styles';

export default (props: {
	children: React.ReactNode,
	hasAbsolute?: boolean,
}) =>
	<Centered style={props.hasAbsolute && AbsoluteStyle}>
		{props.children}
	</Centered>;
