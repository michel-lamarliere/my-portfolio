import React from 'react';
import classes from './Overlay.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import MobileMenu from './MobileMenu';

const Overlay: React.FC = () => {
	const opened = useSelector((state: RootState) => state.mobileMenu.open);

	// if (opened) {
	// 	document.body.style.overflow = 'hidden';
	// } else {
	// 	document.body.style.overflow = 'visible';
	// }

	return (
		<>
			{opened && (
				<div className={classes.overlay}>
					<MobileMenu />
				</div>
			)}
		</>
	);
};

export default Overlay;
