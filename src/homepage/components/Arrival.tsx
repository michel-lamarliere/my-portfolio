import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../shared/store/store';
import { LogoML } from '../../shared/components/UI/SVGLogos';
import classes from './Arrival.module.scss';
import arrow from '../../shared/assets/icons/arrow.svg';

interface Props {
	arrowHandler: () => void;
}

const Arrival: React.FC<Props> = (props) => {
	const french = useSelector((state: RootState) => state.language.french);
	const dark = useSelector((state: RootState) => state.theme.dark);
	const theme = useSelector((state: RootState) => state.theme);

	return (
		<>
			<div className={classes.wrapper}>
				<LogoML
					className={classes.logo}
					fill={dark ? theme.darkTheme.white : theme.lightTheme.white}
				/>
				<div
					className={classes.name}
					style={{
						color: dark ? theme.darkTheme.white : theme.lightTheme.white,
					}}
				>
					Michel Lamarlière
				</div>
				<div
					className={classes.title}
					style={{
						color: dark ? theme.darkTheme.white : theme.lightTheme.white,
					}}
				>
					{french ? 'DÉVELOPPEUR FULL STACK' : 'FULL STACK DEVELOPER'}
				</div>
			</div>
			<div className={classes.slide} onClick={props.arrowHandler}>
				<img src={arrow} alt={french ? 'Flèche' : 'Arrow'} />
			</div>
		</>
	);
};

export default Arrival;
