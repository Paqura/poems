import React, {useEffect, useRef, useState} from 'react';
import {TPoem} from 'src/typedefs/poem';
import DefaultNavLink from 'src/components/shared/DefaultNavLink';
import {prepareTitle} from 'src/pages/helpers';
import UI, {ActiveLinkStyle, OwnLinkStyle} from './styles';

type TProps = {
	data: TPoem,
	params: string,
};

const
	Item = (props: TProps) => {
		const [isActive, setIsActive] = useState(false);
		const linkRef = useRef<HTMLLinkElement>(null);

		useEffect(() => {
			linkRef && linkRef.current && linkRef.current.className === 'active'
				? setIsActive(true)
				: setIsActive(false);
		}, [props.params]);

		return (
			<UI.Title isActive={isActive}>
				<DefaultNavLink
					ref={linkRef}
					ownstyle={OwnLinkStyle}
					to={`/poems/${props.data._id}`}
				>
					{prepareTitle(props.data.body, 36)}
				</DefaultNavLink>
			</UI.Title>
		);
	};

export default Item;
