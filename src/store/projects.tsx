import CegaImg from '../assets/img/cegaImg.png';
import EnolaImg from '../assets/img/enolaImg.png';

import reactIcon from '../assets/icons/react.svg';
import reduxIcon from '../assets/icons/redux.svg';
import typescriptIcon from '../assets/icons/typescript.svg';
import wordpressIcon from '../assets/icons/wordpress.svg';
import googleCloudIcon from '../assets/icons/google.svg';
import firebaseIcon from '../assets/icons/firebase.svg';
import apiIcon from '../assets/icons/api.svg';

const projectStore = [
	{
		id: '01',
		name: 'CEGA',
		description: 'Projet Professionel',
		img: CegaImg,
		technos: ['react', 'redux', 'typescript'],
		technosIcons: [reactIcon, reduxIcon, typescriptIcon],
		website: 'http://cega-audit.com',
		github: 'https://github.com/michel-lamarliere/cega',
	},
	{
		id: '02',
		name: 'Enola Louge',
		description: 'Projet Professionel',
		img: EnolaImg,
		technos: ['react', 'firebase'],
		technosIcons: [reactIcon, firebaseIcon],
		website: 'https://enolalouge.com',
		github: '',
		publicGithub: false,
	},
	{
		id: '03',
		name: 'Oganiru',
		description: 'Projet Professionel',
		img: CegaImg,
		technos: ['wordpress'],
		technosIcons: [wordpressIcon],
		website: 'https://oganirulaw.com',
		github: '',
		publicGithub: false,
	},
	{
		id: '04',
		name: 'Mon Portfolio',
		description: 'Projet Personel',
		img: CegaImg,
		technos: ['react', 'redux', 'typescript'],
		technosIcons: [reactIcon, reduxIcon, typescriptIcon],
		website: 'https://michel-lamarliere.com',
		github: '',
	},
	{
		id: '05',
		name: 'Appli Méteo',
		description: 'Projet Personel',
		img: CegaImg,
		technos: ['react', 'googleCloud', 'api'],
		technosIcons: [reactIcon, googleCloudIcon, apiIcon],
		website: '',
		github: '',
		publicGithub: false,
	},
];

export default projectStore;
