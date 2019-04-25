import React from 'react';
import {connect} from 'react-redux';
import {addComment} from 'src/ducks/details';
import Form from './Form';
import List from './List';

const
	Comments = (props: any) => {
		const addComment = (payload: any) => {
			const candidate: string | null = localStorage.getItem('currentUser');

			if(!candidate)
				return;

			const {userId, firstName, lastName} = JSON.parse(candidate);

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
				<Form onSubmit={addComment} />
				<List data={props.data} />
				{props.isLoading && <div>Loading...</div>}
			</section>
		);
	};

export default connect(
	null,
	{addComment},
)(Comments);
