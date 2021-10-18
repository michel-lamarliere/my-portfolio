import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import { RootState } from '../../../store/store';
import LogoML from '../../_UI/LogoML';
import classes from './MobileMenu.module.scss';
import './MobileMenu.module.scss';

import enLogo from '../../../assets/icons/english.svg';
import frLogo from '../../../assets/icons/francais.svg';
import lightThemeLogo from '../../../assets/icons/theme_light.svg';
import darkThemeLogo from '../../../assets/icons/theme_dark.svg';

const MobileMenu: React.FC = () => {
	const dispatch = useDispatch();
	const opened = useSelector((state: RootState) => state.mobileMenu.open);
	const french = useSelector((state: RootState) => state.language.french);
	const dark = useSelector((state: RootState) => state.theme.dark);
	const location = useLocation().pathname;
	const transition = useTransition(opened, {
		from: { y: 150, x: 150, opacity: 0 },
		enter: { y: 0, x: 0, opacity: 1 },
		leave: { y: 150, x: 150, opacity: 0 },
	});

	let link = '';
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
			<button
				className={classes.trigger_button}
				onClick={() => mobileMenuHandler()}
			>
				<LogoML className={classes.trigger_button_logo} />
			</button>
			{transition(
				(styles, item) =>
					item && (
						<animated.div className={classes.wrapper} style={styles}>
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
								<img
									src={dark ? lightThemeLogo : darkThemeLogo}
									alt={french ? 'Bouton Thème' : 'Theme Button'}
								/>
							</div>
						</animated.div>
					)
			)}
		</>
	);
};

export default MobileMenu;
