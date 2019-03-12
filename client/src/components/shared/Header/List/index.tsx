import React from 'react';
import {HeaderLink, List, Item} from './style';
import {Link} from 'react-router-dom';

const LinksList = (props: {
	links: Array<{
		id: string,
		name: string,
		path: string,
	}>,
}) => (
	<List>
		{props.links.map(link =>
			<Item key={link.id}>
				<HeaderLink
					as={Link}
					to={link.path}
				>
					{link.name}
				</HeaderLink>
			</Item>
		)}
	</List>
);

export default LinksList;
