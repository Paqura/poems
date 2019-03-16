import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import {HashRouter as Router} from 'react-router-dom';
import store, {history} from 'src/store';
import {Normalize} from 'styled-normalize';
import {Root} from 'src/pages';

const
	App = () =>
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<Router>
					<React.Fragment>
						<Normalize />
						<Root />
					</React.Fragment>
				</Router>
			</ConnectedRouter>
		</Provider>;

export default App;
