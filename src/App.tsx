import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from './store/store';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MobileMenu from './components/MobileMenu/MobileMenu';
import Overlay from './components/UI/Overlay';
import Homepage from './pages/homepage/HomepagePage/HomepagePage';
import Projects from './pages/projects/ProjectsPage/ProjectsPage';
import Error from './pages/ErrorPage/ErrorPage';
import ScrollToTop from './utils/ScrollToTop';
import LegalNotice from './pages/legalNotice/LegalNoticePage/LegalNoticePage';

const App: React.FC = () => {
	const dark = useSelector((state: RootState) => state.theme.dark);
	const theme = useSelector((state: RootState) => state.theme);

	useEffect(() => {
		if (dark) {
			document.body.style.backgroundColor = theme.darkTheme.veryDarkGrey;
		} else {
			document.body.style.backgroundColor = theme.lightTheme.veryDarkGrey;
		}
	}, [dark]);

	return (
		<>
			<Header />
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
			<Footer />
		</>
	);
};

export default App;
