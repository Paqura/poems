import React from 'react';
import UI from './styles';

type TProps = {
	children: any,
	top?: number | 'auto',
	bottom?: number | 'auto',
	left?: number | 'auto',
	right?: number | 'auto',
	hasInlineStyle?: boolean,
	customStyle?: Object,
};

const
	MarginBlock: React.FC<TProps> = (props: TProps) => (
		<UI.Block
			style={props.customStyle}
			top={props.top}
			bottom={props.bottom}
			left={props.left}
			right={props.right}
			hasInlineStyle={props.hasInlineStyle}
		>
			{props.children}
		</UI.Block>
	);

export default MarginBlock;
