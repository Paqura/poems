import React from 'react';
import UI from './styles';

const
	MarginBlock = (props: {
		children: any,
		top?: number | 'auto',
		bottom?: number | 'auto',
		left?: number | 'auto',
		right?: number | 'auto',
		hasInlineStyle?: boolean,
		customStyle?: Object,
	}) =>
	<UI.Block
		style={props.customStyle}
		top={props.top}
		bottom={props.bottom}
		left={props.left}
		right={props.right}
		hasInlineStyle={props.hasInlineStyle}
	>
		{props.children}
	</UI.Block>;

export default MarginBlock;
