import React from 'react';
import classes from './Filter.module.scss';

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
	allClasses: string;
	reactHandler: any;
	reactClasses: string;
	reduxHandler: any;
	reduxClasses: string;
	typescriptHandler: any;
	typescriptClasses: string;
	wordpressHandler: any;
	wordpressClasses: string;
	googleCloudHandler: any;
	googleCloudClasses: string;
	firebaseHandler: any;
	firebaseClasses: string;
	apiHandler: any;
	apiClasses: string;
}

const Filter: React.FC<Props> = (props) => {
	const french = useSelector((state: RootState) => state.language.french);

	return (
		<div className={classes.wrapper}>
			<FilterItem
				text={french ? 'Tout' : 'All'}
				logo={false}
				onClick={props.allHandler}
				className={props.allClasses}
			/>
			<FilterItem
				text='React'
				alt='React'
				src={reactIcon}
				onClick={props.reactHandler}
				className={props.reactClasses}
			/>
			<FilterItem
				text='Redux'
				alt='Redux'
				src={reduxIcon}
				onClick={props.reduxHandler}
				className={props.reduxClasses}
			/>
			<FilterItem
				text='TypeScript'
				alt='TypeScript'
				src={typescriptIcon}
				onClick={props.typescriptHandler}
				className={props.typescriptClasses}
			/>
			<FilterItem
				text='Wordpress'
				alt='Wordpress'
				src={wordpressIcon}
				onClick={props.wordpressHandler}
				className={props.wordpressClasses}
			/>
			<FilterItem
				text='Google Cloud'
				alt='Google Cloud'
				src={googleCloudIcon}
				onClick={props.googleCloudHandler}
				className={props.googleCloudClasses}
			/>
			<FilterItem
				text='Firebase'
				alt='Firebase'
				src={firebaseIcon}
				onClick={props.firebaseHandler}
				className={props.firebaseClasses}
			/>
			<FilterItem
				text='API'
				alt='API'
				src={apiIcon}
				onClick={props.apiHandler}
				className={props.apiClasses}
			/>
		</div>
	);
};

export default Filter;
