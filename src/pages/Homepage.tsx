import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Arrival />
			<Stack />
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
