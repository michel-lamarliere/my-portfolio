import React, { useRef } from 'react';
import About from '../components/Homepage/About';
import Arrival from '../components/Homepage/Arrival';
import HomeProjects from '../components/Homepage/HomeProjects';
import Socials from '../components/Homepage/Contact/Socials';
import ContactDetails from '../components/Homepage/Contact/ContactDetails';
import Form from '../components/Homepage/Contact/Form';
import Stack from '../components/Homepage/Stack';
import { SeeMore } from '../components/_UI/Buttons';
import classes from './Homepage.module.scss';
import ScrollToTop from '../ScrollToTop';

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
