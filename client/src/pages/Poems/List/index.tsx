import React from 'react';
import Item from './Item';
import styles from './styles';

type TPoem = {
	_id: string,
	title: string,
	body: string,
};

type TProps = {
	data: TPoem[],
};

const
	List: React.FC<TProps> = (props: TProps) =>
	<styles.List>
		{props.data.map((it: any) => (
			<Item
				key={it._id}
				data={it}
			/>
		))}
	</styles.List>;

export default List;
