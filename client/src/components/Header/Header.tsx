import React from 'react';
import List from './List';
import Container from 'src/components/shared/Container';
import UI from './styles';
import {Logo} from './Logo';

export default (props: {
	hasRegister: boolean,
}) => {
	const
		excludePaths = props.hasRegister ? ['/sign-in', '/sign-up'] : ['/logout'],

		links = [
			{id: '1', name: 'home', path: '/', isPublic: true},
			{id: '2', name: 'poems', path: '/poems', isPublic: true},
			{id: '3', name: 'admin', path: '/admin', isPublic: true},
			{id: '4', name: 'sign in', path: '/sign-in', isPublic: true},
			{id: '5', name: 'sign up', path: '/sign-up', isPublic: true},
			{id: '6', name: 'logout', path: '/logout', isPublic: true},
		].filter(it => !excludePaths.includes(it.path));

	return (
		<UI.Header>
			<Container>
				<UI.Navigation>
					<Logo />
					<List links={links} />
				</UI.Navigation>
			</Container>
		</UI.Header>
	);
};
