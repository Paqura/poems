import React, {useContext, useState} from 'react';
import Context from 'src/context';
import {connect} from 'react-redux';
import UI from './styles';
import MarginBlock from 'src/components/shared/MarginBlock';
import {moduleName, deleteComment, saveUpdatedComment} from 'src/ducks/details';
import {getValueByKey} from 'src/pages/helpers';
import Edit from './Edit';
import {TAction} from 'src/ducks/typedefs/action';

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
	deleteComment: (paylod: string) => TAction,
	saveUpdatedComment: (payload: {comment: string, _id: string}) => TAction,
};

const
	Comment = (props: TProps) => {
		const currentUser = useContext(Context.User);
		const [isEdit, setIsEdit] = useState(false);
		const isOwner = Boolean(props.data.owner.id === getValueByKey(currentUser, 'userId', null));
		const deleteComment = () => props.deleteComment(props.data._id);
		const setEditComment = () => setIsEdit(true);

		const saveUpdatedComment = (payload: {comment: string}) => {
			props.saveUpdatedComment({...payload, _id: props.data._id});
			setIsEdit(false);
		};

		return (
			<UI.Comment key={props.data._id}>
				<header>
					<UI.Author>От: {`${props.data.owner.firstName} ${props.data.owner.lastName}`}</UI.Author>
				</header>

				{isEdit ? <Edit onSubmit={saveUpdatedComment} oldValue={props.data.text} /> : <UI.Text>{props.data.text}</UI.Text>}

				{isOwner && !isEdit && <MarginBlock top={16} hasInlineStyle>
					<UI.UpdateButton onClick={setEditComment}>
						Редактировать
					</UI.UpdateButton>

					<UI.DeleteButton onClick={deleteComment}>
						Удалить
					</UI.DeleteButton>
				</MarginBlock>}
			</UI.Comment>
		);
	};

export default connect(
	(state: any) => ({
		error: state[moduleName].error,
	}),

	{deleteComment, saveUpdatedComment},
)(Comment);
