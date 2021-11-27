import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect, useHistory, useLocation } from 'react-router-dom';

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

	const history = useHistory();
	const location = useLocation();

	const queryParams = new URLSearchParams(location.search);

	useEffect(() => {
		if (dark) {
			document.body.style.backgroundColor = theme.darkTheme.veryDarkGrey;
		} else {
			document.body.style.backgroundColor = theme.lightTheme.veryDarkGrey;
		}
	}, [dark]);

	useEffect(() => {
		let isFrench;
		let isDark;
		if (queryParams) {
			isFrench = queryParams.get('lan');
			isDark = queryParams.get('theme');
		}
		console.log(isFrench);
		let language;
		let localTheme;
		if (localStorage) {
			language = localStorage.getItem('language');
			localTheme = localStorage.getItem('theme');
		}
		// LANGUAGE
		if ((language === 'french' && !french) || isFrench === 'fr') {
			dispatch({ type: 'LANGUAGE TOGGLE' });
		}
		if ((language === 'english' && french) || isFrench === 'en') {
			dispatch({ type: 'LANGUAGE TOGGLE' });
		}
		// THEME
		if ((localTheme === 'light' && dark) || isDark === 'light') {
			dispatch({ type: 'THEME TOGGLE' });
		}
		if ((localTheme === 'dark' && !dark) || isDark === 'dark') {
			dispatch({ type: 'THEME TOGGLE' });
		}
	}, []);

	useEffect(() => {
		history.push({
			pathname: history.location.pathname,
			hash: history.location.hash,
			search: `?lan=${french ? 'fr' : 'en'}&theme=${dark ? 'dark' : 'light'}`,
		});
	}, [french, dark, location.pathname, location.hash]);

	return (
		<Layout>
			<Overlay />
			<ScrollToTop />
			<Switch>
				<Redirect exact from='/' to='/home' />
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
