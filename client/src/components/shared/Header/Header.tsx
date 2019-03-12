import React from 'react';
import styled from 'styled-components';
import {media} from '../../../utils';

export const Header = styled.header`
	background-color: red;

	${media['medium']`
		background: black;
		color: white;
	`}
`;

const renderLinks = (links: string[]) => (
	links.map(link => (
		<li key={link}>
			<a href="/">{link}</a>
		</li>
	))
);

export default () => (
	<Header>
		<nav>
			<ul>
				{renderLinks(['Home', 'Poems', 'About'])}
			</ul>
		</nav>
	</Header>
);