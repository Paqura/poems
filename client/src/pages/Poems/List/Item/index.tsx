import React from 'react';
import styles from './styles';

type TPoem = {
	data: {
		_id: string,
		title: string,
		body: string,
	},

	key: string,
};

const
	Item: React.FC<TPoem> = (props: TPoem) => (
		<li>
			{props.data.body}
		</li>
	);

export default Item;
