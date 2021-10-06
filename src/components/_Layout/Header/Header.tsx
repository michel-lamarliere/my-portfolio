import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';

import LogoML from '../../_UI/LogoML';
import HamburgerBtn from '../Mobile/HamburgerBtn';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';

const Header: React.FC = () => {
	const opened = useSelector((state: RootState) => state.mobileMenu.open);

	const wrapperClasses = opened ? '' : '';
	// const wrapperClasses = opened ? classes.open : '';

	return (
		<div className={`${classes.wrapper} ${wrapperClasses}`}>
			<div className={classes.header}>
				<Link to='/'>
					<LogoML className={classes.logo} />
				</Link>
				{/* <HamburgerBtn /> */}
			</div>
		</div>
	);
};

export default Header;
