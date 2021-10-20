import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import classes from './About.module.scss';

import TitleLign from '../_UI/TitleLign';
import imgPlaceholder from '../../assets/icons/logo_ml.svg';

const Presentation: React.FC = () => {
	const french = useSelector((state: RootState) => state.language.french);
	const dark = useSelector((state: RootState) => state.theme.dark);
	const theme = useSelector((state: RootState) => state.theme);

	return (
		<>
			<TitleLign text={french ? 'Qui suis-je?' : 'About Me'} />
			<div className={classes.wrapper}>
				<img
					src={imgPlaceholder}
					alt={french ? 'Moi' : 'Me'}
					className={classes.img}
				/>
				<div
					className={classes.text}
					style={{
						color: dark ? theme.darkTheme.white : theme.lightTheme.white,
					}}
				>
					<p>
						{french
							? "Après avoir décroché ma licence en langues étrangères, j'ai décidé de me réorienter et me lancer dans le développement en tant qu’autodidacte."
							: 'After graduating with a Bachelor’s degree in foreign languages applied to international business (LEA), I’ve decided to change paths and to go all-in on web development.'}
					</p>
					<p>
						{french
							? 'Ma philosophie est d’intégrer une nouvelle technologie à chaque nouveau projet afin d’étoffer mes connaissances.'
							: 'My way of learning is the create projects and to implement something new each time. '}
					</p>
					<p>{french ? '' : ''}</p>
				</div>
			</div>
		</>
	);
};

export default Presentation;
