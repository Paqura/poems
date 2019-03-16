import React from 'react';
import {Header} from 'src/components/Header';

type TProps = {
	children: React.ReactChildren | React.ReactElement,
};

const
	Layout = (props: TProps) => (
		<>
			<Header />
			<div>{props.children}</div>
		</>
	);

export default Layout;