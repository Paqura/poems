import React, {useState, useEffect} from 'react';
import {addComment} from 'src/ducks/details';
import {connect} from 'react-redux';
import Form from './Form';
import List from './List';
import ErrorBox from './ErrorBox';

const
	Comments = (props: any) => {
		const [isAuth, setIsAuth] = useState(false);

		useEffect(() => {
			props.currentUser ? setIsAuth(true) : setIsAuth(false);
		}, []);

		const addComment = (payload: any) => {
			const {userId, firstName, lastName} = props.currentUser;

			props.addComment({
				owner  : {
					id: userId,
					firstName,
					lastName,
				},

				poemRef: props.poemId,
				text   : payload.text,
			});
		};

		return (
			<section>
				{isAuth
					? <Form onSubmit={addComment} />
					: <ErrorBox />}

				<List data={props.data} />
				{props.isLoading && <div>Loading...</div>}
			</section>
		);
	};

export default connect(
	(state: any) => ({
		currentUser: state.auth.currentUser,
	}),

	{addComment},
)(Comments);
