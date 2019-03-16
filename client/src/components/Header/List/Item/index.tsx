import React from 'react';
import {NavLink} from 'react-router-dom';
import {HeaderLink, Item} from './styles';

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
			activeClassName="header-active-link"
			as={NavLink}
			to={props.data.path}
		>
			{props.data.name}
		</HeaderLink>
	</Item>;

export default NavItem;
