import React from 'react';
import {Header} from 'src/components/Header';

type TProps = {
	children: React.ReactChildren | React.ReactElement,
	show?: boolean,
};

const
	Layout = (props: TProps) =>
		<>
			{props.show && <Header />}
			<div>{props.children}</div>
		</>

export default Layout;