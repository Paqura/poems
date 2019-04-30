import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Header from 'src/components/Header';
import {checkAuthUser} from 'src/ducks/auth';
import {TAction} from 'src/ducks/typedefs/action';

import styled from 'styled-components';

const Main = styled.main`
	padding: 32px 0;
	background-color: #ffffff;
`;

type TProps = {
	children: React.FC<any> | React.ReactElement,
	show?: boolean,
	hasRegister: boolean,
	checkAuthUser: () => TAction,
};

const
	Layout = (props: TProps) => {
		useEffect(() => {
			if(props.hasRegister)
				localStorage.removeItem('anonym');

			if(!props.hasRegister && !localStorage.getItem('anonym'))
				localStorage.setItem('anonym', Date.now().toString());

			props.checkAuthUser();
		});
		console.log('1232aaaa2');
		return (
			<>
				{props.show && <Header hasRegister={props.hasRegister} />}
				<Main>{props.children}</Main>
			</>
		);
	};

export default connect(null, {checkAuthUser})(Layout);
