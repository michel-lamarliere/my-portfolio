import React from 'react';
import classes from './Stack.module.scss';
import StackItem from './StackItem';

import htmlIcon from '../../assets/icons/html.svg';
import cssIcon from '../../assets/icons/css.svg';
import sassIcon from '../../assets/icons/sass.svg';
import javascriptIcon from '../../assets/icons/javascript.svg';
import typescriptIcon from '../../assets/icons/typescript.svg';
import reactIcon from '../../assets/icons/react.svg';
import reduxIcon from '../../assets/icons/redux.svg';
import npmIcon from '../../assets/icons/npm.svg';
import webpackIcon from '../../assets/icons/webpack.svg';
import firebaseIcon from '../../assets/icons/firebase.svg';
import googleCloudIcon from '../../assets/icons/googlecloud.svg';
import gitIcon from '../../assets/icons/git.svg';
import githubIcon from '../../assets/icons/github.svg';
import wordpressIcon from '../../assets/icons/wordpress.svg';
import TitleLign from '../_UI/TitleLign';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

const Stack = React.forwardRef<HTMLDivElement>((props, ref) => {
	const french = useSelector((state: RootState) => state.language.french);

	return (
		<div className={classes.wrapper} ref={ref}>
			<TitleLign text={french ? 'Mes compétences' : 'My Stack'} />
			<div className={classes.stack}>
				<StackItem img={htmlIcon} alt='html' text='HTML' />
				<StackItem img={cssIcon} alt='css' text='CSS' />
				<StackItem img={sassIcon} alt='sass' text='Sass' />
				<StackItem img={javascriptIcon} alt='javascript' text='JavaScript' />
				<StackItem img={typescriptIcon} alt='typescript' text='TypeScript' />
				<StackItem img={reactIcon} alt='react' text='React' />
				<StackItem img={reduxIcon} alt='redux' text='Redux' />
				<StackItem img={npmIcon} alt='npm' text='npm' />
				<StackItem img={webpackIcon} alt='webpack' text='Webpack' />
				<StackItem img={googleCloudIcon} alt='Google Cloud' text='Google Cl.' />
				<StackItem img={firebaseIcon} alt='firebase' text='Firebase' />
				<StackItem img={gitIcon} alt='git' text='git' />
				<StackItem img={githubIcon} alt='github' text='GitHub' />
				<StackItem img={wordpressIcon} alt='wordpress' text='Wordpress' />
			</div>
		</div>
	);
});

export default Stack;
