import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import classes from './HomeProjects.module.scss';

import TitleLign from '../_UI/TitleLign';
import ProjectItem from '../Projects/ProjectItem';
import { useProjects } from '../../hooks/use-projects';

const HomeProjects: React.FC = () => {
	const french = useSelector((state: RootState) => state.language.french);
	const projects = useProjects('HOMEPAGE');

	return (
		<div className={classes.wrapper}>
			<TitleLign text={french ? 'Quelques Projets' : 'Some Projects'} />
			<div className={classes.projects}>{projects}</div>
		</div>
	);
};

export default HomeProjects;
