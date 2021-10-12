import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Projects.module.scss';
import Filter from '../components/Projects/Filter';

import { ContactBtn } from '../components/_UI/Buttons';
import { RootState } from '../store/store';
import { useProjects } from '../hooks/use-projects';

const Projects: React.FC = () => {
	const dispatch = useDispatch();
	const projects = useProjects('PROJECTS');
	const filter = useSelector((state: RootState) => state.filter);

	const filterHandler = (action: string) => {
		dispatch({ type: 'RESET' });
		dispatch({ type: action });
	};

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
			<div className={classes.wrapper}>
				<Filter
					allHandler={() => filterHandler('ALL')}
					allClasses={allClasses}
					reactHandler={() => filterHandler('REACT')}
					reactClasses={reactClasses}
					reduxHandler={() => filterHandler('REDUX')}
					reduxClasses={reduxClasses}
					typescriptHandler={() => filterHandler('TYPESCRIPT')}
					typescriptClasses={typescriptClasses}
					googleCloudHandler={() => filterHandler('GOOGLECLOUD')}
					googleCloudClasses={googleCloudClasses}
					firebaseHandler={() => filterHandler('FIREBASE')}
					firebaseClasses={firebaseClasses}
					wordpressHandler={() => filterHandler('WORDPRESS')}
					wordpressClasses={wordpressClasses}
					apiHandler={() => filterHandler('API')}
					apiClasses={apiClasses}
				/>
				<div className={classes.projects}>{projects}</div>
			</div>
			<ContactBtn />
		</>
	);
};

export default Projects;
