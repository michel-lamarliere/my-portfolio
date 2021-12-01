import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import classes from './Buttons.module.scss';

export const ContactBtn: React.FC = () => {
	const history = useHistory();
	const french = useSelector((state: RootState) => state.language.french);
	const dark = useSelector((state: RootState) => state.theme.dark);
	const theme = useSelector((state: RootState) => state.theme);

	const goToForm = () => {
		history.push('/home/#form');
	};

	return (
		<div
			className={classes.wrapper}
			onClick={goToForm}
			style={{ color: dark ? theme.darkTheme.white : theme.lightTheme.white }}
		>
			{french ? 'Me Contacter' : 'Contact Me'}
		</div>
	);
};

export const SeeMore: React.FC = () => {
	const french = useSelector((state: RootState) => state.language.french);
	const dark = useSelector((state: RootState) => state.theme.dark);
	const theme = useSelector((state: RootState) => state.theme);

	return (
		<Link
			to='/projects'
			className={classes.wrapper}
			style={{
				backgroundColor: dark
					? theme.darkTheme.veryDarkGrey
					: theme.lightTheme.veryDarkGrey,
				color: dark ? theme.darkTheme.white : theme.lightTheme.white,
			}}
		>
			{french ? 'Voir Plus' : 'See More'}
		</Link>
	);
};
