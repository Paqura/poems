import React from 'react';
import Loader from 'src/components/shared/Loader';
import Centered from 'src/components/shared/Centered';

const Styles: any = {
	position: 'absolute',
	height: '100%',
	width: '100%',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
};

export default () => (
	<div style={Styles}>
		<Centered>
			<Loader />
		</Centered>
	</div>
);
