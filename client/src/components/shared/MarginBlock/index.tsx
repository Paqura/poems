import React from 'react';
import {Block} from './styles';

const
	MarginBlock = (props: {
		children: any,
		top?: number,
		bottom?: number,
		left?: number,
		right?: number,
	}) =>
	<Block
		top={props.top}
		bottom={props.bottom}
		left={props.left}
		right={props.right}
	>
		{props.children}
	</Block>;

export default MarginBlock;