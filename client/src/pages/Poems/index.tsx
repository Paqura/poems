import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {moduleName, fetchPoems, TPoemState} from 'src/ducks/poems';
import List from './List';
import Container from 'src/components/shared/Container';
import {TState} from 'src/typedefs/state';
import {TAction} from 'src/ducks/typedefs/action';

type TProps = {
	poems: [],
	loading: boolean,
} & {
	fetchPoems: () => TAction,
};

const
	PoemsPage: React.FC<TProps> = (props: TProps) => {
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
	(state: TState<TProps>) => ({
		poems: state[moduleName].poems,
		loading: state[moduleName].loading,
	}),

	{fetchPoems},
)(PoemsPage);
