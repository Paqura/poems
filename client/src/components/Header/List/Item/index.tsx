import React from 'react';
import {NavLink} from 'react-router-dom';
import UI, {ActiveLinkStyle} from './styles';

const
	NavItem = (props: {
		data: {
			id: string,
			path: string,
			name: string,
		},
	}) =>
	<UI.Item key={props.data.id}>
		<UI.HeaderLink
			exact
			activeStyle={ActiveLinkStyle}
			as={NavLink}
			to={props.data.path}
		>
			{props.data.name}
		</UI.HeaderLink>
	</UI.Item>;

export default NavItem;
