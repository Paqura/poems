import React from 'react';
import {List} from './styles';
import Item from './Item';

const
	LinksList = (props: {
		links: Array<{
			id: string,
			name: string,
			path: string,
			isPublic: boolean,
		}>,
	}) =>
	<List>
		{props.links.map(link => <Item key={link.id} data={link} />)}
	</List>;

export default LinksList;
