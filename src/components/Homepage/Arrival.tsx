import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import LogoML from '../_UI/LogoML';
import classes from './Arrival.module.scss';
import Stack from './Stack';
import arrow from '../../assets/icons/arrow.svg';

interface Props {
	arrowHandler: () => void;
}

const Arrival: React.FC<Props> = (props) => {
	const french = useSelector((state: RootState) => state.language.french);

	return (
		<>
			<div className={classes.wrapper}>
				<LogoML className={classes.logo} />
				<div className={classes.name}>Michel Lamarlière</div>
				<div className={classes.title}>
					{french ? 'DÉVELOPPEUR FRONT END' : 'FRONT END DEVELOPER'}
				</div>
			</div>
			<div className={classes.slide} onClick={props.arrowHandler}>
				<img src={arrow} alt='' />
			</div>
		</>
	);
};

export default Arrival;
