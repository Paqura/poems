import React from 'react';

type TProps = {
	title: string,
};

export default (props: TProps) => (
	<header>
		<h2>{props.title}</h2>
	</header>
);
