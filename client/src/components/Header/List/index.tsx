import React from 'react';
import {List} from './styles';
import Item from './Item';

type TLink = {
	_id: string,
	name: string,
	path: string,
	isPublic: boolean,
};

const
	LinksList = (props: {
		links: []TLink,
	}) =>
	<List>
		{props.links.map(link => <Item key={link.id} data={link} />)}
	</List>;

export default LinksList;
