import React, { useReducer } from 'react';
import classes from './Projects.module.scss';
import ProjectItem from '../components/Projects/ProjectItem';
import Filter from '../components/Projects/Filter';
import FilterItem from '../components/Projects/FilterItem';

import reactIcon from '../assets/icons/react.svg';
import reduxIcon from '../assets/icons/redux.svg';
import typescriptIcon from '../assets/icons/typescript.svg';
import wordpressIcon from '../assets/icons/wordpress.svg';
import firebaseIcon from '../assets/icons/firebase.svg';

let projectsInitial = [
	{
		id: '01',
		name: 'CEGA',
		description: 'Projet Professionel',
		technos: [reactIcon, typescriptIcon, reduxIcon],
	},
	{
		id: '02',
		name: 'Enola Louge',
		description: 'Projet Professionel',
		technos: [reactIcon, firebaseIcon],
	},
	{
		id: '03',
		name: 'Oganiru',
		description: 'Projet Professionel',
		technos: [wordpressIcon],
	},
	{
		id: '04',
		name: 'Mon Portfolio',
		description: 'Mon Personel',
		technos: [reactIcon, typescriptIcon, reduxIcon],
	},
];

const initialStateReducer = {
	all: true,
	react: false,
	redux: false,
	typescript: false,
	firebase: false,
	wordpress: false,
};

interface initialStateObj {
	all: boolean;
	react: boolean;
	redux: boolean;
	typescript: boolean;
	firebase: boolean;
	wordpress: boolean;
}

interface actionObj {
	type: string;
}

const filterReducer = (state: initialStateObj, action: actionObj) => {
	switch (action.type) {
		case 'REACT':
			return {
				...state,
				react: !state.react,
			};
		case 'REDUX':
			return {
				...state,
				redux: !state.redux,
			};
		case 'TYPESCRIPT':
			return {
				...state,
				typescript: !state.typescript,
			};
		case 'FIREBASE':
			return {
				...state,
				firebase: !state.firebase,
			};
		case 'WORDPRESS':
			return {
				...state,
				wordpress: !state.wordpress,
			};
		case 'RESET':
			return {
				all: true,
				react: false,
				redux: false,
				typescript: false,
				firebase: false,
				wordpress: false,
			};
	}
	return state;
};

const Projects: React.FC = () => {
	const [filter, filterDispatch] = useReducer(filterReducer, initialStateReducer);

	const resetFilter = () => {
		filterDispatch({ type: 'RESET' });
	};

	const allHandler = () => {
		resetFilter();
		console.log('all ' + filter.all);
	};

	const reactHandler = () => {
		resetFilter();
		filterDispatch({ type: 'REACT' });
		console.log('react ' + filter.react);
	};

	const reduxHandler = () => {
		resetFilter();
		filterDispatch({ type: 'REDUX' });
		console.log('wordpress ' + filter.wordpress);
	};

	const wordpressHandler = () => {
		resetFilter();
		filterDispatch({ type: 'WORDPRESS' });
		console.log('wordpress ' + filter.wordpress);
	};

	const firebaseHandler = () => {
		resetFilter();
		filterDispatch({ type: 'FIREBASE' });
		console.log('firebase ' + filter.firebase);
	};

	const typescriptHandler = () => {
		resetFilter();
		filterDispatch({ type: 'TYPESCRIPT' });
		console.log('typescript ' + filter.typescript);
	};

	let projects;

	if (filter.all) {
		projects = projectsInitial.map((project) => (
			<ProjectItem
				key={project.id}
				title={project.name}
				description={project.description}
				stack={project.technos}
			/>
		));
	}
	if (filter.all && filter.react) {
		projects = projectsInitial
			.filter((project) => project.technos.indexOf(reactIcon) >= 0)
			.map((project) => (
				<ProjectItem
					key={project.id}
					title={project.name}
					description={project.description}
					stack={project.technos}
				/>
			));
	}
	if (filter.all && filter.redux) {
		projects = projectsInitial
			.filter((project) => project.technos.indexOf(reduxIcon) >= 0)
			.map((project) => (
				<ProjectItem
					key={project.id}
					title={project.name}
					description={project.description}
					stack={project.technos}
				/>
			));
	}
	if (filter.all && filter.typescript) {
		projects = projectsInitial
			.filter((project) => project.technos.indexOf(typescriptIcon) >= 0)
			.map((project) => (
				<ProjectItem
					key={project.id}
					title={project.name}
					description={project.description}
					stack={project.technos}
				/>
			));
	}
	if (filter.all && filter.wordpress) {
		projects = projectsInitial
			.filter((project) => project.technos.indexOf(wordpressIcon) >= 0)
			.map((project) => (
				<ProjectItem
					key={project.id}
					title={project.name}
					description={project.description}
					stack={project.technos}
				/>
			));
	}
	if (filter.all && filter.firebase) {
		projects = projectsInitial
			.filter((project) => project.technos.indexOf(firebaseIcon) >= 0)
			.map((project) => (
				<ProjectItem
					key={project.id}
					title={project.name}
					description={project.description}
					stack={project.technos}
				/>
			));
	}

	const allProjectsFilter =
		!filter.react && !filter.redux && !filter.typescript && !filter.firebase && !filter.wordpress;

	const allClasses = filter.all && allProjectsFilter ? classes.active : '';
	const reactClasses = filter.react ? classes.active : '';
	const reduxClasses = filter.redux ? classes.active : '';
	const typescriptClasses = filter.typescript ? classes.active : '';
	const firebaseClasses = filter.firebase ? classes.active : '';
	const wordpressClasses = filter.wordpress ? classes.active : '';

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
				firebaseHandler={firebaseHandler}
				firebaseClasses={firebaseClasses}
				wordpressHandler={wordpressHandler}
				wordpressClasses={wordpressClasses}
			/>
			<div className={classes.projects}>{projects}</div>
		</>
	);
};
export default Projects;
