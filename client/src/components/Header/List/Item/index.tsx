import React from 'react';
import {NavLink} from 'react-router-dom';
import {ActiveLinkStyle, HeaderLink, Item} from './styles';

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
			activeStyle={ActiveLinkStyle}
			as={NavLink}
			to={props.data.path}
		>
			{props.data.name}
		</HeaderLink>
	</Item>;

export default NavItem;
