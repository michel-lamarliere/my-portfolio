import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import { RootState } from '../../store/store';
import { LogoML, LogoTheme } from '../../shared/SVGLogos';
import classes from './MobileMenu.module.scss';
import './MobileMenu.module.scss';

const MobileMenu: React.FC = () => {
	const dispatch = useDispatch();
	const opened = useSelector((state: RootState) => state.mobileMenu.open);
	const french = useSelector((state: RootState) => state.language.french);
	const dark = useSelector((state: RootState) => state.theme.dark);
	const theme = useSelector((state: RootState) => state.theme);

	const location = useLocation().pathname;
	const transition = useTransition(opened, {
		from: { y: 150, x: 150, opacity: 0 },
		enter: { y: 0, x: 0, opacity: 1 },
		leave: { y: 150, x: 150, opacity: 0 },
		delay: 50,
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
		dispatch({ type: 'OVERLAY TOGGLE' });
		dispatch({ type: 'LANGUAGE TOGGLE' });
	};

	const themeHandler = () => {
		if (!dark) {
			localStorage.setItem('theme', 'dark');
		}
		if (dark) {
			localStorage.setItem('theme', 'light');
		}
		dispatch({ type: 'OVERLAY TOGGLE' });
		dispatch({ type: 'THEME TOGGLE' });
	};

	const wrapperClasses = dark ? classes.wrapper_light : classes.wrapper_dark;

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
						<animated.div
							className={`${classes.wrapper} ${wrapperClasses}`}
							style={styles}
						>
							<Link
								to={path}
								className={classes.link}
								onClick={mobileMenuHandler}
								style={{
									color: dark
										? theme.darkTheme.white
										: theme.lightTheme.white,
								}}
							>
								{link}
							</Link>
							<div className={classes.language} onClick={languageHandler}>
								{french ? 'EN' : 'FR'}
							</div>
							<div className={classes.theme} onClick={themeHandler}>
								<LogoTheme
									fill={
										dark
											? theme.darkTheme.white
											: theme.lightTheme.white
									}
								/>
							</div>
						</animated.div>
					)
			)}
		</>
	);
};

export default MobileMenu;
