import React from 'react';
import UI from './styles';
import VectorEye from './VectorEye';
import Link from 'src/components/shared/DefaultLink';
import MarginBlock from 'src/components/shared/MarginBlock';

import styled from 'styled-components';

// !TODO - сделать более грамотное оформление Комментариев
const Comments = styled(Link)`
	color: #999999;

	&:hover {
		border-bottom: 1px solid;
	}
`;

type TView = {
	id: string,
	views: string[],
};

export default (props: TView) => (
		<UI.View>
			<MarginBlock right={24}>
				<Comments as={Link} to={`/poems/${props.id}`}>Подробнее</Comments>
			</MarginBlock>

			<VectorEye />
			<UI.Counter>{props.views.length}</UI.Counter>
		</UI.View>
	);
