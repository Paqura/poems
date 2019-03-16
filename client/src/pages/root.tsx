import React from 'react';
import {Layout} from 'src/components/shared/Layout';
import {Switch, Route} from 'react-router-dom';
import GenericSpinner from './GenericSpinner';

const Home = React.lazy(() => import('./Home'));
const Poems = React.lazy(() => import('./Poems'));

const About = () => <h1>about</h1>;

const
	Root = () => (
		<Layout>
			<React.Suspense fallback={<GenericSpinner />}>
				<Switch>
					<Route exact path="/" render={() => <Home />} />
					<Route exact path="/poems" render={() => <Poems />} />
					<Route exact path="/about" component={About} />
				</Switch>
			</React.Suspense>
		</Layout>
	);

export default Root;
