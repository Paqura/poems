import React from 'react';
import UI from './styles';
import {ResponsiveImg} from 'src/components/shared/styles';

type TPoem = {
	data: {
		_id: string,
		title: string,
		body: string,
		imgPath: string,
	},

	key: string,
};

const
	Item: React.FC<TPoem> = (props: TPoem) => (
		<UI.Item>
			<div>
				<ResponsiveImg src={props.data.imgPath} alt={props.data.title}/>
			</div>
			<UI.Title>{props.data.title}</UI.Title>
			<UI.Text>
				{props.data.body}
			</UI.Text>
		</UI.Item>
	);

export default Item;
