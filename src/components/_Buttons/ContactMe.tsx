import React from 'react';
import classes from './ContactMe.module.scss';

const ContactMe: React.FC = () => {
	return (
		<a href='#contact' className={classes.wrapper}>
			Me contacter
		</a>
	);
};

export default ContactMe;
