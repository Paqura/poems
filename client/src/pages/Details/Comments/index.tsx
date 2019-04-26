import React, {useState, useEffect} from 'react';
import {addComment} from 'src/ducks/details';
import {connect} from 'react-redux';
import {reset} from 'redux-form';
import Form from './Form';
import List from './List';
import ErrorBox from './ErrorBox';
import MarginBlock from 'src/components/shared/MarginBlock';

const
	Comments = (props: any) => {
		const [isAuth, setIsAuth] = useState(false);

		useEffect(() => {
			props.currentUser ? setIsAuth(true) : setIsAuth(false);
		}, []);

		const addComment = (payload: any) => {
			const {userId, firstName, lastName} = props.currentUser;

			props.addComment({
				owner  : {id: userId, firstName, lastName},
				poemRef: props.poemId,
				text   : payload.text,
			});

			props.reset('add-comment');
		};

		return (
			<MarginBlock top={64}>
				{isAuth
					? <MarginBlock top={16} bottom={16}>
							<Form isLoading={props.isLoading} onSubmit={addComment} />
						</MarginBlock>
					: <ErrorBox />}

				<List data={props.data} />
				{props.isLoading && <div>Loading...</div>}
			</MarginBlock>
		);
	};

export default connect(
	(state: any) => ({
		currentUser: state.auth.currentUser,
	}),

	{addComment, reset},
)(Comments);
