import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {DefaultList} from 'src/components/shared/styles';
import Item from './Item';
import {fetchPoems, moduleName, TPoemState} from 'src/ducks/poems';
import {TPoem} from 'src/typedefs/poem';

const
	Titles = (props: any) => {
		useEffect(() => {
			props.fetchPoems();
		}, []);

		return (
			<>
				{props.loading && !props.data.length
				? <div>Loading...</div>

				:
				<DefaultList>
					{props.data.map((poem: TPoem) =>
						<Item
							params={props.params}
							key={poem._id}
							data={poem}
						/>,
					)}
				</DefaultList>}
			</>
		);
	};

export default connect(
	(state: TPoemState) => ({
		data: state[moduleName].poems,
		loading: state[moduleName].loading,
		error: state[moduleName].error,
	}),

	{fetchPoems},
)(Titles);
