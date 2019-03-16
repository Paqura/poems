import React from 'react';
import List from './List';
import {Header, Navigation} from './styles';

export default () => (
	<Header>
		<Navigation>
			<List
				links={[
					{id: '1', name: 'home', path: '/'},
					{id: '2', name: 'poems', path: '/poems'},
					{id: '3', name: 'about', path: '/about'},
				]}
			/>
		</Navigation>
	</Header>
);
