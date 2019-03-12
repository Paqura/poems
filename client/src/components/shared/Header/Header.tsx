import React from 'react';
import {Header, Navigation} from './style';
import List from './List';

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
