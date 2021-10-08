import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import classes from './App.module.scss';

import Layout from './components/_Layout/Layout';
import MobileMenu from './components/_Layout/Mobile/MobileMenu';
import Overlay from './components/_Layout/Mobile/Overlay';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';

const App: React.FC = () => {
	return (
		<Layout>
			<Overlay />
			<Switch>
				<Route path='/' exact>
					<Redirect to='/home' />
				</Route>
				<Route path='/home'>
					<Homepage />
				</Route>
				<Route path='/projects'>
					<Projects />
				</Route>
			</Switch>
			<MobileMenu />
		</Layout>
	);
};

export default App;
