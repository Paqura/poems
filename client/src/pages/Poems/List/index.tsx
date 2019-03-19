import React from 'react';

const
	List = (props: {
		data: any,
	}) =>
	<ul>
		{props.data.map((it: {title: string, body: string}) => (
			<li key={it.title}>{it.title}</li>
		))}
	</ul>;

export default List;