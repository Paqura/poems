import React, {useState, useEffect, useContext} from 'react';
import {addComment} from 'src/ducks/details';
import {connect} from 'react-redux';
import {reset} from 'redux-form';
import Form from './Form';
import List from './List';
import ErrorBox from './ErrorBox';
import MarginBlock from 'src/components/shared/MarginBlock';
import Context from 'src/context';
import {getValueByKey} from 'src/pages/helpers';

const
	Comments = (props: any) => {
		const currentUser = useContext(Context.User);
		const [isAuth, setIsAuth] = useState(false);

		useEffect(() => {
			getValueByKey(currentUser, 'userId', null) ? setIsAuth(true) : setIsAuth(false);
		}, []);

		const addComment = (payload: any) => {
			const [userId, firstName, lastName] = getValueByKey(
				currentUser,
				['userId', 'firstName', 'lastName'],
				null,
			);

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
			</MarginBlock>
		);
	};

export default connect(null, {addComment, reset})(Comments);
