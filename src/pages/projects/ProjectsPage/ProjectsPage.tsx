import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../../store/store';

import { useProjects } from '../../../hooks/use-projects';

import Filter from '../Filter/Filter';
import { ContactBtn } from '../../../components/UI/Buttons';

import classes from './ProjectsPage.module.scss';

const Projects: React.FC = () => {
	const dispatch = useDispatch();
	const projects = useProjects('PROJECTS');
	const filter = useSelector((state: RootState) => state.filter);
	const dark = useSelector((state: RootState) => state.theme.dark);
	const theme = useSelector((state: RootState) => state.theme);

	const filterHandler = (action: string): void => {
		dispatch({ type: 'RESET' });
		dispatch({ type: action });
	};

	const borderColor = `solid 0.1rem ${
		dark ? theme.darkTheme.white : theme.lightTheme.white
	}`;

	const allBorder = filter.all ? borderColor : '';
	const reactBorder = filter.react ? borderColor : '';
	const reduxBorder = filter.redux ? borderColor : '';
	const typescriptBorder = filter.typescript ? borderColor : '';
	const googleCloudBorder = filter.googleCloud ? borderColor : '';
	const firebaseBorder = filter.firebase ? borderColor : '';
	const wordpressBorder = filter.wordpress ? borderColor : '';
	const apiBorder = filter.api ? borderColor : '';
	const nodeJsBorder = filter.nodejs ? borderColor : '';
	const expressJsBorder = filter.expressjs ? borderColor : '';
	const mongoDBBorder = filter.mongodb ? borderColor : '';

	return (
		<>
			<div className={classes.wrapper}>
				<Filter
					allHandler={() => filterHandler('ALL')}
					allBorder={allBorder}
					reactHandler={() => filterHandler('REACT')}
					reactBorder={reactBorder}
					reduxHandler={() => filterHandler('REDUX')}
					reduxBorder={reduxBorder}
					typescriptHandler={() => filterHandler('TYPESCRIPT')}
					typescriptBorder={typescriptBorder}
					googleCloudHandler={() => filterHandler('GOOGLECLOUD')}
					googleCloudBorder={googleCloudBorder}
					firebaseHandler={() => filterHandler('FIREBASE')}
					firebaseBorder={firebaseBorder}
					wordpressHandler={() => filterHandler('WORDPRESS')}
					wordpressBorder={wordpressBorder}
					apiHandler={() => filterHandler('API')}
					apiBorder={apiBorder}
					nodeJsHandler={() => filterHandler('NODEJS')}
					nodeJsBorder={nodeJsBorder}
					expressJsHandler={() => filterHandler('EXPRESSJS')}
					expressJsBorder={expressJsBorder}
					mongoDBHandler={() => filterHandler('MONGODB')}
					mongoDBBorder={mongoDBBorder}
				/>
				<div className={classes.projects}>{projects}</div>
			</div>
			<ContactBtn />
		</>
	);
};

export default Projects;
