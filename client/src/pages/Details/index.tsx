import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {moduleName, fetchPoem} from 'src/ducks/details';
import Container from 'src/components/shared/Container';
import GenericSpinner from 'src/pages/GenericSpinner';
import Titles from './Titles';
import UI from './styles';

const
	Details = (props: any) => {
		useEffect(() => {
			props.fetchPoem(props.match.params.id);
		}, [props.match.params.id]);

		return (
			<Container>
				<UI.Grid>
					<UI.Sidebar>
						<header>
							<h2>Все произведения</h2>
						</header>
						<Titles params={props.match.params.id} />
					</UI.Sidebar>
					<UI.PoemWrapper>
						{props.loading && !props.data.length
							? <GenericSpinner />

							: <>
									<UI.Title>{props.data.title}</UI.Title>
									<UI.Text>
										{props.data.body}
									</UI.Text>
							</>}
					</UI.PoemWrapper>
				</UI.Grid>
			</Container>
		);
	};

export default connect(
	(state: any) => ({
		data: state[moduleName].poem,
		loading: state[moduleName].loading,
		error: state[moduleName].error,
	}),

	{fetchPoem},
)(Details);
