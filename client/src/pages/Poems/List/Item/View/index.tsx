import React from 'react';
import UI from './styles';
import VectorEye from './VectorEye';

type TView = {
	views: string[],
};

export default (props: TView) => (
		<UI.View>
			<VectorEye />
			<UI.Counter>{props.views.length}</UI.Counter>
		</UI.View>
	);
