import React from 'react';
import Form from './Form';

const
	Comments = (props: any) => {
		const addComment = (payload: any) => {
			console.log(payload);
		};

		return (
			<section>
				<Form onSubmit={addComment} />

				<div>
					<ul>
						<li>
							Comment 1
						</li>
					</ul>
				</div>
			</section>
		);
	};

export default Comments;
