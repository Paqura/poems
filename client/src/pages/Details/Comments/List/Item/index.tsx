import React from 'react';
import UI from './styles';

type TComment = {
	_id: string,

	owner: {
		firstName: string,
		lastName: string,
	},

	text: string,
};

type TProps = {
	data: TComment,
};

export default (props: TProps) => (
	<UI.Comment key={props.data._id}>
		<header>
			<UI.Author>От: {`${props.data.owner.firstName} ${props.data.owner.lastName}`}</UI.Author>
		</header>
		<UI.Text>{props.data.text}</UI.Text>
	</UI.Comment>
);
