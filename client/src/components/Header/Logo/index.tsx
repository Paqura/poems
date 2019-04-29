import React from 'react';
import Icon from './Icon';
import {withDefaultLinkStyle} from 'src/components/shared/hoc';
import {NavLink} from 'react-router-dom';

const DefaultLink = withDefaultLinkStyle(NavLink);

export default () => (
	<DefaultLink to="/">
		<Icon width={60} height={60} />
	</DefaultLink>
);
