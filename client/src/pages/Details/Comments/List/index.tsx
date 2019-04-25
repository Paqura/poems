import React from 'react';
import {DefaultList} from 'src/components/shared/styles';

const
	List = (props: any) => (
		<DefaultList>
			{props.data.map((comment: any) => (
				<li key={comment._id}>{comment.text}</li>
			))}
		</DefaultList>
	);

export default List;
