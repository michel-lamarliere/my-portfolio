import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import classes from './Buttons.module.scss';

export const ContactBtn: React.FC = () => {
	const french = useSelector((state: RootState) => state.language.french);

	return (
		<a href='#contact' className={classes.wrapper}>
			{french ? 'Me Contacter' : 'Contact Me'}
		</a>
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
