import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Homepage.module.scss';

const Homepage: React.FC = () => {
	return <Link to='/projects'>Projects</Link>;
};

export default Homepage;
