import React, { useEffect, useRef } from 'react';
import About from '../components/Homepage/About';
import Arrival from '../components/Homepage/Arrival';
import HomeProjects from '../components/Homepage/HomeProjects';
import Socials from '../components/Homepage/Contact/Socials';
import ContactDetails from '../components/Homepage/Contact/ContactDetails';
import Form from '../components/Homepage/Contact/Form';
import Stack from '../components/Homepage/Stack';
import { SeeMore } from '../components/_UI/Buttons';
import classes from './Homepage.module.scss';

const Homepage: React.FC = () => {
	const stack = useRef<HTMLDivElement>(null);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const arrowHandler = () => {
		if (stack.current) {
			stack.current.scrollIntoView({
				behavior: 'smooth',
			});
		}
	};

	return (
		<>
			<Arrival arrowHandler={arrowHandler} />
			<Stack ref={stack} />
			<About />
			<HomeProjects />
			<SeeMore />
			<div>
				<Socials />
				<ContactDetails />
				<Form />
			</div>
		</>
	);
};

export default Homepage;
