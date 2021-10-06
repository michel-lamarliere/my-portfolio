import React, { useEffect, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Projects.module.scss';
import Filter from '../components/Projects/Filter';

import projectStore from '../store/projectsStore';
import { ContactBtn } from '../components/_UI/Buttons';
import { RootState } from '../store/store';
import ProjectItem from '../components/Projects/ProjectItem';

const Projects: React.FC = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const dispatch = useDispatch();
	const filter = useSelector((state: RootState) => state.filter);

	const resetFilter = () => {
		dispatch({ type: 'RESET' });
	};

	const allHandler = () => {
		resetFilter();
		dispatch({ type: 'ALL' });
	};

	const reactHandler = () => {
		resetFilter();
		dispatch({ type: 'REACT' });
	};

	const reduxHandler = () => {
		resetFilter();
		dispatch({ type: 'REDUX' });
	};

	const typescriptHandler = () => {
		resetFilter();
		dispatch({ type: 'TYPESCRIPT' });
	};

	const wordpressHandler = () => {
		resetFilter();
		dispatch({ type: 'WORDPRESS' });
	};

	const firebaseHandler = () => {
		resetFilter();
		dispatch({ type: 'FIREBASE' });
	};

	const googleCloudHandler = () => {
		resetFilter();
		dispatch({ type: 'GOOGLECLOUD' });
	};

	const apiHandler = () => {
		resetFilter();
		dispatch({ type: 'API' });
	};

	const whichTechno = () => {
		for (const key in filter) {
			if (filter[key]) {
				for (let i = 0; i < projectStore.length; i++) {
					if (projectStore[i].technos.indexOf(key) >= 0) {
						return key;
					}
				}
			}
		}
	};

	let projects;
	if (filter.all) {
		projects = projectStore.map((project: any) => (
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
		));
	} else {
		const filteredTechno = whichTechno();
		projects = projectStore
			.filter((project: any) => project.technos.indexOf(filteredTechno) >= 0)
			.map((project: any) => (
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
			));
	}

	const allClasses = filter.all ? classes.active : '';
	const reactClasses = filter.react ? classes.active : '';
	const reduxClasses = filter.redux ? classes.active : '';
	const typescriptClasses = filter.typescript ? classes.active : '';
	const googleCloudClasses = filter.googleCloud ? classes.active : '';
	const firebaseClasses = filter.firebase ? classes.active : '';
	const wordpressClasses = filter.wordpress ? classes.active : '';
	const apiClasses = filter.api ? classes.active : '';

	return (
		<>
			<Filter
				allHandler={allHandler}
				allClasses={allClasses}
				reactHandler={reactHandler}
				reactClasses={reactClasses}
				reduxHandler={reduxHandler}
				reduxClasses={reduxClasses}
				typescriptHandler={typescriptHandler}
				typescriptClasses={typescriptClasses}
				googleCloudHandler={googleCloudHandler}
				googleCloudClasses={googleCloudClasses}
				firebaseHandler={firebaseHandler}
				firebaseClasses={firebaseClasses}
				wordpressHandler={wordpressHandler}
				wordpressClasses={wordpressClasses}
				apiHandler={apiHandler}
				apiClasses={apiClasses}
			/>
			<div className={classes.projects}>{projects}</div>
			<ContactBtn />
		</>
	);
};
export default Projects;
