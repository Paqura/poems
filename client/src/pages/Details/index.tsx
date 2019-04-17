import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {moduleName, fetchPoem} from 'src/ducks/details';

const
	Details = (props: any) => {
		useEffect(() => {
			props.fetchPoem(props.match.params.id);
		}, []);

		return (
			<div>
				<h2>{props.data.title}</h2>
				<pre>
					{props.data.body}
				</pre>
				<span>
					views: {props.data.views && props.data.views.length}
				</span>
			</div>
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
