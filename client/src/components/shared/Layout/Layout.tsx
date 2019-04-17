import React, {useEffect} from 'react';
import {Header} from 'src/components/Header';

type TProps = {
	children: React.FC<any> | React.ReactElement,
	show?: boolean,
	hasRegister: boolean,
};

const
	Layout = (props: TProps) => {
		useEffect(() => {
			if(props.hasRegister)
				localStorage.removeItem('anonym');

			if(!props.hasRegister && !localStorage.getItem('anonym'))
				localStorage.setItem('anonym', Date.now().toString());
		});

		return (
			<>
				{props.show && <Header hasRegister={props.hasRegister} />}
				<div>{props.children}</div>
			</>
		);
	};

export default Layout;
