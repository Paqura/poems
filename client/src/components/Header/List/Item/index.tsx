import React from 'react';
import {NavLink} from 'react-router-dom';
import {ActiveStyle, HeaderLink, Item} from './styles';

const
	NavItem = (props: {
		data: {
			id: string,
			path: string,
			name: string,
		},
	}) =>
	<Item key={props.data.id}>
		<HeaderLink
			exact
			as={NavLink}
			to={props.data.path}
			activeStyle={ActiveStyle}
		>
			{props.data.name}
		</HeaderLink>
	</Item>;

export default NavItem;
