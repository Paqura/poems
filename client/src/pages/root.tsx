import React from 'react';
import {Layout} from 'src/components/shared/Layout';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';

const Poems = () => <h1>poems</h1>;
const About = () => <h1>about</h1>;

const
	Root = () => (
		<Layout>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/poems" component={Poems} />
				<Route exact path="/about" component={About} />
			</Switch>
		</Layout>
	);

export default Root;
