import React from 'react';
import {NavLink} from 'react-router-dom';
import {withRouter, RouteComponentProps} from 'react-router';
import UI, {ActiveLinkStyle} from './styles';

type TLink = {
	id: string,
	path: string,
	name: string,
};

type TProps = RouteComponentProps<any> & {
	data: TLink,

	location: {
		pathname: string,
	},
};

const
	NavItem = (props: TProps) => {
		const pathObject = {
			pathname: props.data.path,
			state   : props.location.pathname,
		};

		return (
			<UI.Item key={props.data.id}>
				<UI.HeaderLink
					exact
					activeStyle={ActiveLinkStyle}
					as={NavLink}
					to={pathObject}
				>
					{props.data.name}
				</UI.HeaderLink>
			</UI.Item>
		);
	};

export default withRouter(NavItem);
