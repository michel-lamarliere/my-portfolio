import React from 'react';
import classes from './Filter.module.scss';

import FilterItem from './FilterItem';

import reactIcon from '../../assets/icons/react.svg';
import reduxIcon from '../../assets/icons/redux.svg';
import typescriptIcon from '../../assets/icons/typescript.svg';
import wordpressIcon from '../../assets/icons/wordpress.svg';
import firebaseIcon from '../../assets/icons/firebase.svg';

interface Props {
	allHandler: any;
	reactHandler: any;
	reduxHandler: any;
	typescriptHandler: any;
	wordpressHandler: any;
	firebaseHandler: any;
	allClasses: string;
	reactClasses: string;
	reduxClasses: string;
	typescriptClasses: string;
	firebaseClasses: string;
	wordpressClasses: string;
}

const Filter: React.FC<Props> = (props) => {
	return (
		<div className={classes.wrapper}>
			<FilterItem text='Tout' logo={false} onClick={props.allHandler} className={props.allClasses} />
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
				text='Firebase'
				alt='Firebase'
				src={firebaseIcon}
				onClick={props.firebaseHandler}
				className={props.firebaseClasses}
			/>
		</div>
	);
};

export default Filter;
