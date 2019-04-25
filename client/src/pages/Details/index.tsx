import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {moduleName, fetchPoem} from 'src/ducks/details';
import Container from 'src/components/shared/Container';
import GenericSpinner from 'src/pages/GenericSpinner';
import Titles from './Titles';
import Comments from './Comments';
import UI from './styles';

const
	Details = (props: any) => {
		const poemId = props.match.params.id;

		useEffect(() => {
			props.fetchPoem(poemId);
		}, [poemId]);

		return (
			<Container>
				<UI.Grid>
					<UI.Sidebar>
						<header>
							<h2>Все произведения</h2>
						</header>
						<Titles params={poemId} />
					</UI.Sidebar>

					<UI.PoemWrapper>
						{props.isPoemLoading && !props.data.length
							? <GenericSpinner />

							: <>
									<UI.Title>{props.data.title}</UI.Title>
									<UI.Text>
										{props.data.body}
									</UI.Text>
							</>}
					</UI.PoemWrapper>
				</UI.Grid>

				<Comments
					data={props.comments}
					poemId={poemId}
					isLoading={props.isCommentLoading}
				/>
			</Container>
		);
	};

export default connect(
	(state: any) => ({
		data: state[moduleName].poem,
		comments: state[moduleName].comments,
		isPoemLoading: state[moduleName].isPoemLoading,
		isCommentLoading: state[moduleName].isCommentLoading,
		error: state[moduleName].error,
	}),

	{fetchPoem},
)(Details);
