import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import classes from './Header.module.scss';

import LogoML from '../../_UI/LogoML';
import { RootState } from '../../../store/store';
import { ThemeLogo } from '../../_UI/Logos';

const Header: React.FC = () => {
	const dispatch = useDispatch();
	const french = useSelector((state: RootState) => state.language.french);
	const dark = useSelector((state: RootState) => state.theme.dark);
	const theme = useSelector((state: RootState) => state.theme);

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
		if (!dark) {
			localStorage.setItem('theme', 'dark');
		}
		if (dark) {
			localStorage.setItem('theme', 'light');
		}
		dispatch({ type: 'THEME TOGGLE' });
	};

	const linkColor = dark ? theme.darkTheme.white : theme.lightTheme.white;

	return (
		<div
			className={classes.wrapper}
			style={{
				backgroundColor: dark
					? theme.darkTheme.veryDarkGrey
					: theme.lightTheme.veryDarkGrey,
			}}
		>
			<div className={classes.header}>
				<div className={classes.links}>
					<Link to='/home'>
						<LogoML
							className={classes.logo}
							fill={dark ? theme.darkTheme.white : theme.lightTheme.white}
						/>
					</Link>
					<NavLink
						to='/home'
						className={classes.links_link}
						style={{ color: linkColor }}
						activeClassName={classes.links_link_active}
					>
						{french ? 'Accueil' : 'Home'}
					</NavLink>
					<NavLink
						to='/projects'
						className={classes.links_link}
						style={{ color: linkColor }}
						activeClassName={classes.links_link_active}
					>
						{french ? 'Projets' : 'Projects'}
					</NavLink>
				</div>
				<div className={classes.links}>
					<div
						className={classes.language}
						style={{
							border: `solid 0.125rem ${
								dark ? theme.darkTheme.white : theme.lightTheme.white
							}`,
							color: dark ? theme.darkTheme.white : theme.lightTheme.white,
						}}
						onClick={languageHandler}
					>
						{french ? 'EN' : 'FR'}
					</div>
					<div className={classes.theme} onClick={themeHandler}>
						<ThemeLogo
							fill={dark ? theme.darkTheme.white : theme.lightTheme.white}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
