import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {moduleName, fetchPoem} from 'src/ducks/details';
import Container from 'src/components/shared/Container';
import styled from 'styled-components';

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
	grid-gap: 16px;
	margin: 16px 0;
`;

const Sidebar = styled.aside`
	padding: 32px;
	background-color: #ffffff;

	box-shadow: inset 0 0 0 1px rgba(0,0,0,.03),
		8px 14px 38px rgba(39,44,49,.06),
		1px 3px 8px rgba(39,44,49,.03);
`;

const Poem = styled.article`
	padding: 32px;
	background-color: #ffffff;

	box-shadow: inset 0 0 0 1px rgba(0,0,0,.03),
		8px 14px 38px rgba(39,44,49,.06),
		1px 3px 8px rgba(39,44,49,.03);
`;

const Title = styled.h4`
	width: 100%;
	font-size: 28px;
	text-align: left;
`;

const Text = styled.pre`
	font-size: 16px;
	line-height: 1.5;
	font-weight: 500;
	white-space: pre-line;
	text-align: left;
`;

const
	Details = (props: any) => {
		useEffect(() => {
			props.fetchPoem(props.match.params.id);
		}, []);

		return (
			<Container>
				<Grid>
					<Sidebar>
						Sidebar
					</Sidebar>
					<Poem>
						<Title>{props.data.title}</Title>
						<Text>
							{props.data.body}
						</Text>
					</Poem>
				</Grid>
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
