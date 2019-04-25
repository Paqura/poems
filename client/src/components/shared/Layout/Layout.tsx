import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Header} from 'src/components/Header';
import {checkAuthUser} from 'src/ducks/auth';
import {TAction} from 'src/ducks/typedefs/action';

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

		return (
			<>
				{props.show && <Header hasRegister={props.hasRegister} />}
				<main>{props.children}</main>
			</>
		);
	};

export default connect(
	null,
	{checkAuthUser},
)(Layout);
