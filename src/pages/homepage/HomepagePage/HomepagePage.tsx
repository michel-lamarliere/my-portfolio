import React, { useRef } from 'react';

import About from '../About/About';
import Arrival from '../Arrival/Arrival';
import HomeProjects from '../HomeProjects/HomeProjects';
import Socials from '../contact/Socials/Socials';
import ContactDetails from '../contact/ContactDetails/ContactDetails';
import Form from '../contact/ContactForm/ContactForm';
import Stack from '../Stack/Stack';
import { SeeMore } from '../../../components/UI/Buttons';

import classes from './HomepagePage.module.scss';

const Homepage: React.FC = () => {
	const stack = useRef<HTMLDivElement>(null);

	const arrowHandler = () => {
		if (stack.current) {
			stack.current.scrollIntoView({
				behavior: 'smooth',
			});
		}
	};

	return (
		<div className={classes.wrapper}>
			<Arrival arrowHandler={arrowHandler} />
			<Stack ref={stack} />
			<About />
			<HomeProjects />
			<SeeMore />
			<div className={classes.contact}>
				<div className={classes.contact_text}>
					<Socials className={classes.socials} />
					<ContactDetails className={classes.details} />
				</div>
				<Form className={classes.form} />
			</div>
		</div>
	);
};

export default Homepage;
