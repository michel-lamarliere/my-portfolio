import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import classes from './ContactDetails.module.scss';

import TitleLign from '../../_UI/TitleLign';

const ContactDetails: React.FC = () => {
	const french = useSelector((state: RootState) => state.language.french);

	return (
		<div className={classes.wrapper}>
			<TitleLign text={french ? 'Me contacter' : 'My Details'} />
			<div className={classes.contact}>
				<div className={classes.text}>Michel Lamarlière</div>
				<div className={classes.text}>contact@michel-lamarliere.com</div>
				<div className={classes.text}>Toulouse, France</div>
			</div>
		</div>
	);
};

export default ContactDetails;
