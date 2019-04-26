import React from 'react';
import {DefaultList} from 'src/components/shared/styles';
import Item from './Item';

const
	List = (props: any) => (
		<DefaultList>
			<header>
				<h3>Комментарии:</h3>
			</header>
			{!props.data.length && <div>Комметариев ещё нет</div>}

			{props.data.map((comment: any) => (
				<Item key={comment._id} data={comment} />
			))}
		</DefaultList>
	);

export default List;
