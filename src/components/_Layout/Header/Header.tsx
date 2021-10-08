import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';

import LogoML from '../../_UI/LogoML';

const Header: React.FC = () => {
	return (
		<div className={classes.wrapper}>
			<div className={classes.header}>
				<Link to='/'>
					<LogoML className={classes.logo} />
				</Link>
			</div>
		</div>
	);
};

export default Header;
