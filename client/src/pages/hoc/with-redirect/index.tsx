import React from 'react';
import {Redirect} from 'react-router';
import {hasRegister} from 'src/pages/helpers';

const
	WithRedirect = (props: any) => (Component: any) => hasRegister()
		? <Redirect to="/" />
		: <Component {...props} />;

export default WithRedirect;
