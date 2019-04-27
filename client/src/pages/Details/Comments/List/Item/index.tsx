import React, {useContext} from 'react';
import Context from 'src/context';
import {connect} from 'react-redux';
import UI from './styles';
import MarginBlock from 'src/components/shared/MarginBlock';
import {deleteComment} from 'src/ducks/details';

type TComment = {
	_id: string,

	owner: {
		id: string,
		firstName: string,
		lastName: string,
	},

	text: string,
};

type TProps = {
	data: TComment,
	deleteComment: Function,
};

const
	Comment = (props: TProps) => {
		const currentUserId = useContext(Context.User);
		const isOwner = Boolean(props.data.owner.id === currentUserId);
		const deleteComment = () => props.deleteComment(props.data._id);

		return (
			<UI.Comment key={props.data._id}>
				<header>
					<UI.Author>От: {`${props.data.owner.firstName} ${props.data.owner.lastName}`}</UI.Author>
				</header>

				<UI.Text>{props.data.text}</UI.Text>

				{isOwner && <MarginBlock top={16}>
					<UI.DeleteButton
						onClick={deleteComment}
					>
						Удалить
					</UI.DeleteButton>
				</MarginBlock>}
			</UI.Comment>
		);
	};

export default connect(null, {deleteComment})(Comment);
