import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import LogoML from '../_UI/LogoML';
import classes from './Arrival.module.scss';

import imgPlaceholder from '../../assets/icons/react.svg';

const Arrival: React.FC = () => {
	const french = useSelector((state: RootState) => state.language.french);

	const arrowHandler = () => {
		window.scrollTo(0, 1000);
	};

	return (
		<>
			<div className={classes.wrapper}>
				<LogoML className={classes.logo} />
				<div className={classes.name}>Michel Lamarlière</div>
				<div className={classes.title}>
					{french ? 'DÉVELOPPEUR FRONT END' : 'FRONT END DEVELOPER'}
				</div>
			</div>
			<div className={classes.slide} onClick={arrowHandler}>
				<img src={imgPlaceholder} alt='' />
			</div>
		</>
	);
};

export default Arrival;
