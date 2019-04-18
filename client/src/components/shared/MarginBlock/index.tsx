import React from 'react';
import UI from './styles';

const
	MarginBlock = (props: {
		children: any,
		top?: number,
		bottom?: number,
		left?: number,
		right?: number,
	}) =>
	<UI.Block
		top={props.top}
		bottom={props.bottom}
		left={props.left}
		right={props.right}
	>
		{props.children}
	</UI.Block>;

export default MarginBlock;
