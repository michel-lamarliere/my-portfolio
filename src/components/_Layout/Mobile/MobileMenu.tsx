import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { RootState } from '../../../store/store';
import LogoML from '../../_UI/LogoML';
import classes from './MobileMenu.module.scss';

const MobileMenu: React.FC = () => {
	const opened = useSelector((state: RootState) => state.mobileMenu.open);
	const french = useSelector((state: RootState) => state.language.french);
	const dispatch = useDispatch();
	const location = useLocation().pathname;

	let link;
	let path = '';

	if (location === '/' && french) {
		link = 'Projets';
		path = '/projects';
	} else if (location === '/' && !french) {
		link = 'Projects';
		path = '/projects';
	} else if (french) {
		link = 'Accueil';
		path = '/';
	} else if (!french) {
		link = 'Home';
		path = '/';
	}

	const mobileMenuHandler = () => {
		dispatch({ type: 'OVERLAY TOGGLE' });
	};

	const languageHandler = () => {
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
					<Link to={path} className={classes.link} onClick={mobileMenuHandler}>
						{link}
					</Link>
					<div className={classes.language} onClick={languageHandler}>
						<img src={''} alt='L' />
					</div>
					<div className={classes.theme} onClick={themeHandler}>
						<img src={''} alt='T' />
					</div>
				</>
			)}
		</>
	);
};

export default MobileMenu;
