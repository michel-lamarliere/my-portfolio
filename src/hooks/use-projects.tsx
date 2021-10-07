import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

import CegaImg from '../assets/img/cegaImg.png';
import EnolaImg from '../assets/img/enolaImg.png';

import reactIcon from '../assets/icons/react.svg';
import reduxIcon from '../assets/icons/redux.svg';
import typescriptIcon from '../assets/icons/typescript.svg';
import wordpressIcon from '../assets/icons/wordpress.svg';
import googleCloudIcon from '../assets/icons/google.svg';
import firebaseIcon from '../assets/icons/firebase.svg';
import apiIcon from '../assets/icons/api.svg';

import ProjectItem from '../components/Projects/ProjectItem';

export const useProjects = (fn: string) => {
	const french = useSelector((state: RootState) => state.language.french);
	const filter = useSelector((state: RootState) => state.filter);

	let pro = 'Projet Professionnel';
	let perso = 'Projet Personnel';

	if (!french) {
		pro = 'Profesional Project';
		perso = 'Personal Project';
	}

	const projectStore = [
		{
			id: '01',
			name: 'CEGA',
			description: pro,
			img: CegaImg,
			technos: ['react', 'redux', 'typescript'],
			technosIcons: [reactIcon, reduxIcon, typescriptIcon],
			website: 'http://cega-audit.com',
			github: 'https://github.com/michel-lamarliere/cega',
			firstPage: true,
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
			name: 'Oganiru',
			description: pro,
			img: CegaImg,
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
			img: CegaImg,
			technos: ['react', 'redux', 'typescript'],
			technosIcons: [reactIcon, reduxIcon, typescriptIcon],
			website: 'https://michel-lamarliere.com',
			github: '',
			firstPage: true,
		},
		{
			id: '05',
			name: 'Appli Méteo',
			description: perso,
			img: CegaImg,
			technos: ['react', 'googleCloud', 'api'],
			technosIcons: [reactIcon, googleCloudIcon, apiIcon],
			website: '',
			github: '',
			publicGithub: false,
		},
	];

	if (fn === 'HOMEPAGE') {
		return projectStore
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
			));
	}

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

	if (fn === 'PROJECTS') {
		const filteredTechno = whichTechno();
		if (filter.all) {
			return projectStore.map((project: any) => (
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
		} else if (
			projectStore.filter(
				(project: any) => project.technos.indexOf(filteredTechno) >= 0
			)
		) {
			return projectStore
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
	}
};
