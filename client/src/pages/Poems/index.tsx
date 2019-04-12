import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {moduleName, fetchPoems, TPoemState} from 'src/ducks/poems';
import List from './List';
import Container from 'src/components/shared/Container';
import Immutable from 'immutable';

type TProps = {
	fetchPoems: Function,
	poems: [],
	loading: boolean,
} & Immutable.Record<any>;

const
	PoemsPage: React.FC<any> = (props: TProps) => {
		useEffect((): void => {
			props.fetchPoems();
		}, []);

		return (
			<Container>
				<List data={props.poems} />
			</Container>
		);
	};

export default connect(
	(state: TPoemState) => ({
		poems: state[moduleName].get('poems'),
		loading: state[moduleName].loading,
	}),

	{fetchPoems},
)(PoemsPage);
