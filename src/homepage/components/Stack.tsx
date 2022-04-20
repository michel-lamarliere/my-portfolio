import React from 'react';
import classes from './Stack.module.scss';
import StackItem, { ThemedStackItem } from './StackItem';

import htmlIcon from '../../shared/assets/icons/html.svg';
import cssIcon from '../../shared/assets/icons/css.svg';
import sassIcon from '../../shared/assets/icons/sass.svg';
import javascriptIcon from '../../shared/assets/icons/javascript.svg';
import typescriptIcon from '../../shared/assets/icons/typescript.svg';
import reactIcon from '../../shared/assets/icons/react.svg';
import reduxIcon from '../../shared/assets/icons/redux.svg';
import npmIcon from '../../shared/assets/icons/npm.svg';
import webpackIcon from '../../shared/assets/icons/webpack.svg';
import firebaseIcon from '../../shared/assets/icons/firebase.svg';
import googleCloudIcon from '../../shared/assets/icons/googlecloud.svg';
import gitIcon from '../../shared/assets/icons/git.svg';
import wordpressIcon from '../../shared/assets/icons/wordpress.svg';
import nodejsIcon from '../../shared/assets/icons/nodejs.svg';
import expressjsIcon from '../../shared/assets/icons/express.png';
import mongodbIcon from '../../shared/assets/icons/mongodb.svg';

import TitleLign from './TitleLign';

import { RootState } from '../../shared/store/store';
import { useSelector } from 'react-redux';
import { LogoGitHub } from '../../shared/components/UI/SVGLogos';

const Stack = React.forwardRef<HTMLDivElement>((props, ref) => {
	const french = useSelector((state: RootState) => state.language.french);
	const dark = useSelector((state: RootState) => state.theme.dark);
	const theme = useSelector((state: RootState) => state.theme);

	return (
		<div className={classes.wrapper} ref={ref}>
			<TitleLign
				className={classes.lign}
				text={french ? 'Mes compétences' : 'My Stack'}
			/>
			<div className={classes.stack}>
				<StackItem img={htmlIcon} alt='html' text='HTML' />
				<StackItem img={cssIcon} alt='css' text='CSS' />
				<StackItem img={sassIcon} alt='sass' text='Sass' />
				<StackItem img={javascriptIcon} alt='javascript' text='JavaScript' />
				<StackItem img={typescriptIcon} alt='typescript' text='TypeScript' />
				<StackItem img={reactIcon} alt='react' text='React' />
				<StackItem img={reduxIcon} alt='redux' text='Redux' />
				<StackItem img={nodejsIcon} alt='nodejs' text='NodeJS' />
				<StackItem img={expressjsIcon} alt='expressjs' text='ExpressJS' />
				<StackItem img={mongodbIcon} alt='mongodb' text='MongoDB' />
				<StackItem img={npmIcon} alt='npm' text='npm' />
				<StackItem img={webpackIcon} alt='webpack' text='Webpack' />
				<StackItem img={googleCloudIcon} alt='Google Cloud' text='Google Cl.' />
				<StackItem img={firebaseIcon} alt='firebase' text='Firebase' />
				<StackItem img={gitIcon} alt='git' text='git' />
				<ThemedStackItem alt='github' text='GitHub'>
					<LogoGitHub
						fill={dark ? theme.darkTheme.white : theme.lightTheme.white}
						className={classes.svg}
					/>
				</ThemedStackItem>
				<StackItem img={wordpressIcon} alt='wordpress' text='Wordpress' />
			</div>
		</div>
	);
});

export default Stack;
