import React from 'react';
import UI from './styles';

export default (props: {
	children: React.ReactNode,
}) => (
	<UI.Container>
		{props.children}
	</UI.Container>
);
