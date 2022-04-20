import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

import sixAppImg from '../assets/img/dark_six-app.png';
import CegaImg from '../assets/img/dark_cega.png';
import EnolaImg from '../assets/img/dark_enola.png';
import WeatherImg from '../assets/img/dark_meteo.png';
import MichelImg from '../assets/img/dark_michel.png';
import OganiruImg from '../assets/img/dark_oganiru.png';

import reactIcon from '../assets/icons/react.svg';
import reduxIcon from '../assets/icons/redux.svg';
import typescriptIcon from '../assets/icons/typescript.svg';
import wordpressIcon from '../assets/icons/wordpress.svg';
import googleCloudIcon from '../assets/icons/googlecloud.svg';
import firebaseIcon from '../assets/icons/firebase.svg';
import apiIcon from '../assets/icons/api.svg';
import nodejsIcon from '../assets/icons/node-js.png';
import expressIcon from '../assets/icons/express.png';
import mongodbIcon from '../assets/icons/mongodb.png';

import ProjectItem from '../../projects/components/ProjectItem';

export const useProjects = (fn: string) => {
	const french = useSelector((state: RootState) => state.language.french);
	const filter = useSelector((state: RootState) => state.filter);

	let pro = 'Projet Professionnel';
	let perso = 'Projet Personnel';

	if (!french) {
		pro = 'Professional Project';
		perso = 'Personal Project';
	}

	const projectStore = [
		{
			id: '00',
			name: 'Six App',
			description: perso,
			img: sixAppImg,
			technos: ['react', 'redux', 'typescript', 'nodejs', 'expressjs', 'mongodb'],
			technosIcons: [
				reactIcon,
				reduxIcon,
				typescriptIcon,
				nodejsIcon,
				expressIcon,
				mongodbIcon,
			],
			website: 'https://six-app.com',
			github: 'https://github.com/michel-lamarliere/six-app',
			firstPage: true,
			goToWebsite: true,
		},
		{
			id: '01',
			name: 'CEGA',
			description: pro,
			img: CegaImg,
			technos: ['react', 'redux', 'typescript'],
			technosIcons: [reactIcon, reduxIcon, typescriptIcon],
			website: 'https://cega-audit.com',
			github: 'https://github.com/michel-lamarliere/cega',
			firstPage: false,
			goToWebsite: false,
		},
		{
			id: '02',
			name: 'Enola Louge',
			description: pro,
			img: EnolaImg,
			technos: ['react', 'firebase'],
			technosIcons: [reactIcon, firebaseIcon],
			website: 'https://enolalouge.com',
			github: '',
			publicGithub: false,
			firstPage: true,
		},
		{
			id: '03',
			name: 'Oganiru Law',
			description: pro,
			img: OganiruImg,
			technos: ['wordpress'],
			technosIcons: [wordpressIcon],
			website: 'https://oganirulaw.com',
			github: '',
			publicGithub: false,
		},
		{
			id: '04',
			name: french ? 'Mon Portfolio' : 'My Portfolio',
			description: perso,
			img: MichelImg,
			technos: ['react', 'redux', 'typescript'],
			technosIcons: [reactIcon, reduxIcon, typescriptIcon],
			website: '',
			github: 'https://github.com/michel-lamarliere/my-portfolio',
			goToWebsite: false,
		},
		{
			id: '05',
			name: french ? 'Appli Méteo' : 'Weather App',
			description: perso,
			img: WeatherImg,
			technos: ['react', 'googleCloud', 'api'],
			technosIcons: [reactIcon, googleCloudIcon, apiIcon],
			website: 'https://weather-app-michel-lamarliere.vercel.app/',
			github: '',
			firstPage: true,
			publicGithub: false,
		},
	];

	interface Project {
		id: string;
		name: string;
		description: string;
		img: string;
		technos: string[];
		technosIcons: string[];
		website: string;
		github: string;
		firstPage?: boolean;
		goToWebsite?: boolean;
		publicGithub?: boolean;
	}

	const newProjectItem = (project: Project) => {
		return (
			<ProjectItem
				key={project.id}
				img={project.img}
				title={project.name}
				description={project.description}
				stack={project.technosIcons}
				websiteLink={project.website}
				githubLink={project.github}
				publicGithub={project.publicGithub}
				goToWebsite={project.goToWebsite}
			/>
		);
	};

	if (fn === 'HOMEPAGE') {
		return projectStore
			.filter((project) => project.firstPage === true)
			.map((project) => newProjectItem(project));
	}

	const whichTechno = (): string => {
		for (const techno in filter) {
			if (filter[techno]) {
				for (let i = 0; i < projectStore.length; i++) {
					if (projectStore[i].technos.indexOf(techno) >= 0) {
						return techno;
					}
				}
			}
		}
		return 'error';
	};

	if (fn === 'PROJECTS') {
		const filteredTechno: string = whichTechno();
		if (filter.all) {
			return projectStore.map((project) => newProjectItem(project));
		} else if (
			projectStore.filter((project) => project.technos.indexOf(filteredTechno) >= 0)
		) {
			return projectStore
				.filter(
					(project: Project) => project.technos.indexOf(filteredTechno) >= 0
				)
				.map((project: Project) => newProjectItem(project));
		}
	}
};
