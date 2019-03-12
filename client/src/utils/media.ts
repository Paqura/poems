import {css} from 'styled-components';

type TSize = {
	[key: string]: number;
};

const size: TSize = {
	'small' : 400,
	'medium': 960,
	'large' : 1240,
};

export default Object.keys(size)
	.reduce((acc: any, label: string) => {
		acc[label] = (...args: any) => css`
			@media(min-width: ${size[label]}px) {
				${css(args)}
			}
		`;

	return acc;
}, {});