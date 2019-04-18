import React from 'react';
import {Layout} from 'src/components/shared/Layout';
import {Switch, Route} from 'react-router-dom';
import GenericSpinner from './GenericSpinner';
import {withRouter} from 'react-router';
import {Confirm, SignIn, SignUp, Logout} from './Auth';
import {isAuthRoute, hasRegister} from './helpers';
import {withRedirect} from './hoc';

const Home = React.lazy(() => import('./Home'));
const Poems = React.lazy(() => import('./Poems'));
const Details = React.lazy(() => import('./Details'));

export type TRootProps = {
	location: {
		pathname: string,
	},
};

const
	Root = (props: TRootProps) =>
		<Layout show={isAuthRoute(props.location.pathname)} hasRegister={hasRegister()}>
			<React.Suspense fallback={<GenericSpinner />}>
				<Switch>
					<Route exact path="/sign-in" render={props => withRedirect(props)(SignIn)} />
					<Route exact path="/sign-up" render={props => withRedirect(props)(SignUp)} />
					<Route exact path="/confirm" render={props => withRedirect(props)(Confirm)} />
					<Route exact path="/logout" render={props => <Logout {...props} />} />
					<Route exact path="/" render={() => <Home />} />
					<Route exact path="/poems" render={props => <Poems {...props} />} />
					<Route exact path="/poems/:id" render={props => <Details {...props} />} />
				</Switch>
			</React.Suspense>
		</Layout>;

export default withRouter(Root);
