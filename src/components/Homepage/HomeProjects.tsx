import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import classes from './HomeProjects.module.scss';

import TitleLign from '../_UI/TitleLign';
import { useProjects } from '../../hooks/use-projects';
import { LeftArrowLogo, RightArrowLogo } from '../_UI/Logos';

const HomeProjects: React.FC = () => {
	const french = useSelector((state: RootState) => state.language.french);
	const dark = useSelector((state: RootState) => state.theme.dark);
	const theme = useSelector((state: RootState) => state.theme);

	const projects = useProjects('HOMEPAGE');
	const projectRef = useRef<null | HTMLDivElement>(null);

	const leftBtnHandler = () => {
		if (projectRef.current) {
			projectRef.current.scrollBy({
				left: -250,
				top: 0,
				behavior: 'smooth',
			});
		}
	};

	const rightBtnHandler = () => {
		if (projectRef.current) {
			projectRef.current.scrollBy({
				left: 250,
				top: 0,
				behavior: 'smooth',
			});
		}
	};

	return (
		<>
			<TitleLign text={french ? 'Quelques Projets' : 'Some Projects'} />
			<div className={classes.wrapper}>
				<div className={classes.left} onClick={() => leftBtnHandler()}>
					<LeftArrowLogo
						className={classes.left_arrow}
						fill={dark ? theme.darkTheme.white : theme.lightTheme.white}
					/>
				</div>
				<div className={classes.projects} ref={projectRef}>
					{projects}
				</div>
				<div className={classes.right} onClick={() => rightBtnHandler()}>
					<RightArrowLogo
						className={classes.right_arrow}
						fill={dark ? theme.darkTheme.white : theme.lightTheme.white}
					/>
				</div>
			</div>
		</>
	);
};

export default HomeProjects;
