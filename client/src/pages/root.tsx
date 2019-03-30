import React from 'react';
import {Layout} from 'src/components/shared/Layout';
import {Switch, Route} from 'react-router-dom';
import GenericSpinner from './GenericSpinner';
import {withRouter} from "react-router";
import {SignIn} from './Auth';
import {isAuthRoute} from './helpers';

const Home = React.lazy(() => import('./Home'));
const Poems = React.lazy(() => import('./Poems'));
const Admin = React.lazy(() => import('./Admin'));

export type TRootProps = {
	location: {
		pathname: string,
	},
};

const
	Root = (props: TRootProps) =>
		<Layout show={isAuthRoute(props.location.pathname)}>
			<React.Suspense fallback={<GenericSpinner />}>
				<Switch>
					<Route exact path="/sign-in" render={() => <SignIn />} />
					<Route exact path="/" render={() => <Home />} />
					<Route exact path="/poems" render={() => <Poems />} />
					<Route exact path="/admin" render={() => <Admin />} />
				</Switch>
			</React.Suspense>
		</Layout>;

export default withRouter(Root);
