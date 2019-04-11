import React from 'react';
import {Header} from 'src/components/Header';

type TProps = {
	children: React.FC<any> | React.ReactElement,
	show?: boolean,
	hasRegister: boolean,
};

const
	Layout = (props: TProps) =>
		<>
			{props.show && <Header hasRegister={props.hasRegister} />}
			<div>{props.children}</div>
		</>;

export default Layout;
