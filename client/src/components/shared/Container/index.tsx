import React from 'react';
import UI from './styles';

export default (props: {
	children: any,
}) =>
	<UI.Container>
		{props.children}
	</UI.Container>;
