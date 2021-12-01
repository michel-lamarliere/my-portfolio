import React, { useRef } from 'react';
import About from '../components/About';
import Arrival from '../components/Arrival';
import HomeProjects from '../components/HomeProjects';
import Socials from '../components/Contact/Socials';
import ContactDetails from '../components/Contact/ContactDetails';
import Form from '../components/Contact/Form';
import Stack from '../components/Stack';
import { SeeMore } from '../../shared/components/UI/Buttons';
import classes from './Homepage.module.scss';

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
