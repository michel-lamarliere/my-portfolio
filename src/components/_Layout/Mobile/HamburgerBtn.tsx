import React from 'react';
import classes from './HamburgerBtn.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';

const HamburgerBtn: React.FC = (props) => {
	const opened = useSelector((state: RootState) => state.mobileMenu.open);
	const dispatch = useDispatch();

	const hamburgerButtonHandler = () => {
		dispatch({ type: 'TOGGLE' });
		console.log('open ' + opened);
	};

	const hamburgerButtonClasses = opened ? classes.open : '';

	return (
		<div
			className={`${classes.wrapper} ${hamburgerButtonClasses}`}
			onClick={hamburgerButtonHandler}
		>
			<span className={classes.lign}></span>
		</div>
	);
};

export default HamburgerBtn;
