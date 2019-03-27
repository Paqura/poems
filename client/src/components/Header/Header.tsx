import React from 'react';
import List from './List';
import Container from 'src/components/shared/Container';
import {Header, Navigation} from './styles';
import {Logo} from './Logo';

export default () => (
	<Header>
		<Container>
			<Navigation>
				<Logo />
				<List
					links={[
						{id: '1', name: 'home', path: '/'},
						{id: '2', name: 'poems', path: '/poems'},
						{id: '3', name: 'admin', path: '/admin'},
						{id: '4', name: 'auth', path: '/auth'},
					]}
				/>
			</Navigation>
		</Container>
	</Header>
);
