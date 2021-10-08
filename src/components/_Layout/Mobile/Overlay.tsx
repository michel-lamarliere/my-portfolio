import React, { useState, useEffect } from 'react';
import classes from './Overlay.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import MobileMenu from './MobileMenu';

const Overlay: React.FC = () => {
	const opened = useSelector((state: RootState) => state.mobileMenu.open);
	const [scrolled, setScrolled] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		window.onscroll = () => {
			setScrolled(true);
		};
		if (scrolled && opened) {
			dispatch({ type: 'OVERLAY TOGGLE' });
		}

		return () => setScrolled(false);
	}, [scrolled]);

	return (
		<>
			{opened && (
				<div
					className={classes.overlay}
					onClick={() => dispatch({ type: 'OVERLAY TOGGLE' })}
				>
					<MobileMenu />
				</div>
			)}
		</>
	);
};

export default Overlay;
