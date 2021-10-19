import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import classes from './About.module.scss';

import TitleLign from '../_UI/TitleLign';
import imgPlaceholder from '../../assets/img/cegaImg.png';

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
						Après avoir décroché ma licence en langues étrangères, j’ai décidé
						de me réorienter et me lancer dans le développement en tant
						qu’autodidacte.
					</p>
					<p>
						Ma philosophie est d’intégrer une nouvelle technologie à chaque
						nouveau projet afin d’étoffer mes connaissances.
					</p>
					<p>
						J’ai aujourd’hui les compétences nécessaires pour:
						<br /> - intégrer une maquette - créer un site web responsive
						<br /> - utiliser le Context API ou Redux avec React afin de gérer
						le state d’une application
						<br /> - utiliser une API afin de rendre le contenu dynamique
					</p>
					<p>
						Après avoir développé de nombreux projets pour développer mes
						connaissances et quelques clients, je souhaite intégrer une équipe
						et/ou développer un projet conséquent dans le but d’acquérir
						encore de nouvelles connaissaces.
					</p>
				</div>
			</div>
		</>
	);
};

export default Presentation;
