import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { RootState } from '../../../store/store';
import LogoML from '../../_UI/LogoML';
import classes from './MobileMenu.module.scss';

import enLogo from '../../../assets/icons/english.svg';
import frLogo from '../../../assets/icons/francais.svg';

const MobileMenu: React.FC = () => {
	const opened = useSelector((state: RootState) => state.mobileMenu.open);
	const french = useSelector((state: RootState) => state.language.french);
	const dispatch = useDispatch();
	const location = useLocation().pathname;

	let link;
	let path = '';

	if (location === '/home' && french) {
		link = 'Projets';
		path = '/projects';
	} else if (location === '/home' && !french) {
		link = 'Projects';
		path = '/projects';
	} else if (french) {
		link = 'Accueil';
		path = '/home';
	} else if (!french) {
		link = 'Home';
		path = '/home';
	}

	const mobileMenuHandler = () => {
		dispatch({ type: 'OVERLAY TOGGLE' });
	};

	const languageHandler = () => {
		if (!french) {
			localStorage.setItem('language', 'french');
		}
		if (french) {
			localStorage.setItem('language', 'english');
		}
		dispatch({ type: 'LANGUAGE TOGGLE' });
	};

	const themeHandler = () => {
		dispatch({ type: 'THEME TOGGLE' });
	};

	return (
		<>
			<div className={classes.trigger_button} onClick={mobileMenuHandler}>
				<LogoML className={classes.trigger_button_logo} />
			</div>
			{opened && (
				<>
					<div className={classes.wrapper}>
						<Link
							to={path}
							className={classes.link}
							onClick={mobileMenuHandler}
						>
							{link}
						</Link>
						<div className={classes.language} onClick={languageHandler}>
							<img
								src={french ? enLogo : frLogo}
								alt={french ? 'English' : 'Français'}
							/>
						</div>
						<div className={classes.theme} onClick={themeHandler}>
							<img src={''} alt='T' />
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default MobileMenu;
