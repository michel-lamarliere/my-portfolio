import React, { useState, useEffect } from 'react';
import classes from './Overlay.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useTransition, animated } from 'react-spring';
import { RootState } from '../../../store/store';
import MobileMenu from './MobileMenu';

const Overlay: React.FC = () => {
	const opened = useSelector((state: RootState) => state.mobileMenu.open);

	const [scrolled, setScrolled] = useState(false);
	const dispatch = useDispatch();
	const transition = useTransition(opened, {
		from: { opacity: 0 },
		enter: { opacity: 0.5 },
		leave: { opacity: 0 },
	});

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
			{transition(
				(styles, item) =>
					item && (
						<animated.div
							className={classes.overlay}
							onClick={() => dispatch({ type: 'OVERLAY TOGGLE' })}
							style={styles}
						>
							<MobileMenu />
						</animated.div>
					)
			)}
		</>
	);
};

export default Overlay;
