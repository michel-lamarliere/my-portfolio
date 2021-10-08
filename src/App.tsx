import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/_Layout/Layout';
import MobileMenu from './components/_Layout/Mobile/MobileMenu';
import Overlay from './components/_Layout/Mobile/Overlay';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import ScrollToTop from './ScrollToTop';
import { RootState } from './store/store';

const App: React.FC = () => {
	const french = useSelector((state: RootState) => state.language.french);
	const dispatch = useDispatch();

	useEffect(() => {
		let language;
		if (localStorage) {
			language = localStorage.getItem('language');
		}
		if (language === 'french' && !french) {
			dispatch({ type: 'LANGUAGE TOGGLE' });
		}

		if (language === 'english' && french) {
			dispatch({ type: 'LANGUAGE TOGGLE' });
		}
	}, []);

	return (
		<Layout>
			<Overlay />
			<ScrollToTop />
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
