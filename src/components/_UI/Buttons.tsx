import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import classes from './Buttons.module.scss';

export const ContactBtn: React.FC = () => {
	const history = useHistory();
	const french = useSelector((state: RootState) => state.language.french);

	const goToForm = () => {
		history.push('/');
	};

	return (
		<div className={classes.wrapper} onClick={goToForm}>
			{french ? 'Me Contacter' : 'Contact Me'}
		</div>
	);
};

export const SeeMore: React.FC = () => {
	const french = useSelector((state: RootState) => state.language.french);

	return (
		<Link to='/projects' className={classes.wrapper}>
			{french ? 'Voir Plus' : 'See More'}
		</Link>
	);
};
