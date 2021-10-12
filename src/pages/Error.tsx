import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../store/store';
import classes from './Error.module.scss';

const Error: React.FC = () => {
	const french = useSelector((state: RootState) => state.language.french);

	return (
		<div className={classes.wrapper}>
			<div className={classes.text}>
				<div className={classes.text_error}>{french ? 'Erreur' : 'Error'}</div>
				<div className={classes.text_not_found}>
					{french ? 'Page introuvable !' : 'Page Not Found!'}
				</div>
			</div>
			<div className={classes.links}>
				<Link to='/home' className={classes.links_link}>
					{french ? 'Accueil' : 'Home'}
				</Link>
				<span>|</span>
				<Link to='/projects' className={classes.links_link}>
					{french ? 'Projets' : 'Projects'}
				</Link>
			</div>
		</div>
	);
};

export default Error;
