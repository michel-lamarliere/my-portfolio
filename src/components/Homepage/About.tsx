import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import classes from './About.module.scss';

import TitleLign from '../_UI/TitleLign';
import imgPlaceholder from '../../assets/img/ml_temp.jpg';

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
					{french ? (
						<>
							<p>
								Je m’appelle Michel et je suis Dévelopeur Front-End sur
								Toulouse.
							</p>
							<p>
								Après avoir décroché ma licence en langues étrangères,
								j’ai décidé de me réorienter et me lancer dans le
								développement.
							</p>
							<p>
								En tant qu’autodidacte, j’ai pour objectif de m’apprendre
								et de m’améliorer jour après jour en intégrant une
								nouvelle technologie à chaque nouveau projet.
							</p>
							<p>
								Rigoureux, passionné, curieux et efficace dans mon
								travail, je sais m’adapter afin de créer des sites
								rapides, responsives et sécurisés.
							</p>
							<p>
								Je peux intervenir dans des projets qui nécessitent de :
								<br />
								<br />- intégrer une maquette
								<br />- créer un site web responsive (blog, site vitrine)
								<br />- créer un site web dynamique (API, base de données)
							</p>
							<p>
								N’hésitez pas à me contacter, je ferai de mon mieux pour
								vous répondre le plus rapidement possible !
							</p>
						</>
					) : (
						<>
							<p>
								Hi, I’m Michel, a Frond-End Developer from Toulouse,
								France.
							</p>
							<p>
								After graduating with a Bachelor’s degree in foreign
								languages applied to international business (LEA), I’ve
								decided to change paths and learn programming.
							</p>
							<p>
								As a self-taught programmer, I aim to learn every single
								day by implementing a new technology to each new project I
								develop.
							</p>
							<p>
								I consider myself as a rigorous, passionate and efficient
								programmer who knows how to adapt my way of working to the
								project.
							</p>
							<p>
								I am able to intervene or build from the ground up
								projects that require to:
								<br />
								<br />- convert mockups into a functioning website
								<br />- build a responsive website (blog, landing page)
								<br />- build a dynamic website (APIs, databases)
							</p>
							<p>
								If you have any questions, please fell free to use the
								contact form and I’ll get back to you as possible!
							</p>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default Presentation;
