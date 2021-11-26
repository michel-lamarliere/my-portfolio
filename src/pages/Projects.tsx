import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Border from './Projects.module.scss';
import Filter from '../components/Projects/Filter';

import { ContactBtn } from '../components/_UI/Buttons';
import { RootState } from '../store/store';
import { useProjects } from '../hooks/use-projects';

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

	return (
		<>
			<div className={Border.wrapper}>
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
				/>
				<div className={Border.projects}>{projects}</div>
			</div>
			<ContactBtn />
		</>
	);
};

export default Projects;
