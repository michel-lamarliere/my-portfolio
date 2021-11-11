import React from 'react';
import Border from './Filter.module.scss';

import FilterItem from './FilterItem';

import reactIcon from '../../assets/icons/react.svg';
import reduxIcon from '../../assets/icons/redux.svg';
import typescriptIcon from '../../assets/icons/typescript.svg';
import wordpressIcon from '../../assets/icons/wordpress.svg';
import googleCloudIcon from '../../assets/icons/googlecloud.svg';
import firebaseIcon from '../../assets/icons/firebase.svg';
import apiIcon from '../../assets/icons/api.svg';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

interface Props {
	allHandler: any;
	allBorder: string;
	reactHandler: any;
	reactBorder: string;
	reduxHandler: any;
	reduxBorder: string;
	typescriptHandler: any;
	typescriptBorder: string;
	wordpressHandler: any;
	wordpressBorder: string;
	googleCloudHandler: any;
	googleCloudBorder: string;
	firebaseHandler: any;
	firebaseBorder: string;
	apiHandler: any;
	apiBorder: string;
}

const Filter: React.FC<Props> = (props) => {
	const french = useSelector((state: RootState) => state.language.french);

	return (
		<div className={Border.wrapper}>
			<FilterItem
				text={french ? 'Tout' : 'All'}
				logo={false}
				onClick={props.allHandler}
				border={props.allBorder}
			/>
			<FilterItem
				text='React'
				alt='React'
				src={reactIcon}
				onClick={props.reactHandler}
				border={props.reactBorder}
			/>
			<FilterItem
				text='Redux'
				alt='Redux'
				src={reduxIcon}
				onClick={props.reduxHandler}
				border={props.reduxBorder}
			/>
			<FilterItem
				text='TypeScript'
				alt='TypeScript'
				src={typescriptIcon}
				onClick={props.typescriptHandler}
				border={props.typescriptBorder}
			/>
			<FilterItem
				text='Wordpress'
				alt='Wordpress'
				src={wordpressIcon}
				onClick={props.wordpressHandler}
				border={props.wordpressBorder}
			/>
			<FilterItem
				text='Google Cl.'
				alt='Google Cloud'
				src={googleCloudIcon}
				onClick={props.googleCloudHandler}
				border={props.googleCloudBorder}
			/>
			<FilterItem
				text='Firebase'
				alt='Firebase'
				src={firebaseIcon}
				onClick={props.firebaseHandler}
				border={props.firebaseBorder}
			/>
			<FilterItem
				text='API'
				alt='API'
				src={apiIcon}
				onClick={props.apiHandler}
				border={props.apiBorder}
			/>
		</div>
	);
};

export default Filter;
