import React from 'react';
import UI from './styles';
import Item from './Item';

type TLink = {
	id: string,
	name: string,
	path: string,
	isPublic: boolean,
};

type TProps = {
	links: TLink[],
};

const
	LinksList: React.FC<TProps> = (props: TProps) =>
	<UI.List>
		{props.links.map((link: TLink) => <Item key={link.id} data={link} />)}
		{console.log(props)}
	</UI.List>;

export default LinksList;
