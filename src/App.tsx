import React from 'react';
import { Switch, Route } from 'react-router-dom';
import classes from './App.module.scss';

import Layout from './components/_Layout/Layout';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';

const App: React.FC = () => {
	return (
		<Layout>
			<Switch>
				<Route path='/' exact>
					<Homepage />
				</Route>
				<Route path='/projects'>
					<Projects />
				</Route>
			</Switch>
		</Layout>
	);
};
export default App;
