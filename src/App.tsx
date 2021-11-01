import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/_Layout/Layout';
import MobileMenu from './components/_Layout/Mobile/MobileMenu';
import Overlay from './components/_Layout/Mobile/Overlay';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import Error from './pages/Error';
import ScrollToTop from './ScrollToTop';
import { RootState } from './store/store';
import LegalNotice from './pages/LegalNotice';

const App: React.FC = () => {
	const french = useSelector((state: RootState) => state.language.french);
	const dark = useSelector((state: RootState) => state.theme.dark);
	const theme = useSelector((state: RootState) => state.theme);
	const dispatch = useDispatch();

	useEffect(() => {
		if (dark) {
			document.body.style.backgroundColor = theme.darkTheme.veryDarkGrey;
		} else {
			document.body.style.backgroundColor = theme.lightTheme.veryDarkGrey;
		}
	}, [dark]);

	useEffect(() => {
		let language;
		let localTheme;
		if (localStorage) {
			language = localStorage.getItem('language');
			localTheme = localStorage.getItem('theme');
		}
		// LANGUAGE
		if (language === 'french' && !french) {
			dispatch({ type: 'LANGUAGE TOGGLE' });
		}
		if (language === 'english' && french) {
			dispatch({ type: 'LANGUAGE TOGGLE' });
		}
		// THEME
		if (localTheme === 'light' && dark) {
			dispatch({ type: 'THEME TOGGLE' });
		}
		if (localTheme === 'dark' && !dark) {
			dispatch({ type: 'THEME TOGGLE' });
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
				<Route path='/legalnotice'>
					<LegalNotice />
				</Route>
				<Route path='*'>
					<Error />
				</Route>
			</Switch>
			<MobileMenu />
		</Layout>
	);
};

export default App;
