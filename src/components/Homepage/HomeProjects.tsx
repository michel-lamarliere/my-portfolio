import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import classes from './HomeProjects.module.scss';

import TitleLign from '../_UI/TitleLign';
import ProjectItem from '../Projects/ProjectItem';
import projects from '../../store/projectsStore';

const HomeProjects: React.FC = () => {
	const french = useSelector((state: RootState) => state.language.french);

	return (
		<div className={classes.wrapper}>
			<TitleLign text={french ? 'Quelques Projets' : 'Some Projects'} />
			<div className={classes.projects}>
				{projects
					.filter((project) => project.firstPage === true)
					.map((project) => (
						<ProjectItem
							key={project.id}
							img={project.img}
							title={project.name}
							description={project.description}
							stack={project.technosIcons}
							website_link={project.website}
							github_link={project.github}
							publicGithub={project.publicGithub}
						/>
					))}
			</div>
		</div>
	);
};

export default HomeProjects;
