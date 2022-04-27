import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import classes from './About.module.scss';

import TitleLign from '../TitleLign/TitleLign';
import imgPlaceholder from '../../../assets/img/ml_temp.jpg';
import mlImg from '../../../assets/img/ml.jpg';

const About: React.FC = () => {
	const french = useSelector((state: RootState) => state.language.french);
	const dark = useSelector((state: RootState) => state.theme.dark);
	const theme = useSelector((state: RootState) => state.theme);

	return (
		<>
			<TitleLign text={french ? 'Qui suis-je?' : 'About Me'} />
			<div className={classes.wrapper}>
				<img src={mlImg} alt={french ? 'Moi' : 'Me'} className={classes.img} />
				<div
					className={classes.text_wrapper}
					style={{
						color: dark ? theme.darkTheme.white : theme.lightTheme.white,
					}}
				>
					{french ? (
						<>
							<div className={classes.text}>
								Je m’appelle Michel et je suis un développeur full stack
								basé à Toulouse.
							</div>
							<div className={classes.text}>
								Après avoir décroché ma licence en langues étrangères,
								j’ai décidé de me réorienter et me lancer dans le
								développement.
							</div>
							<div className={classes.text}>
								En tant qu’autodidacte, j’ai pour objectif de m’apprendre
								et de m’améliorer jour après jour en intégrant une
								nouvelle technologie à chaque nouveau projet.
							</div>
							<div className={classes.text}>
								Rigoureux, passionné, curieux et efficace dans mon
								travail, je sais m’adapter afin de créer des sites
								rapides, responsives et sécurisés.
							</div>
							{/* <div className={classes.text}>
								Je peux intervenir dans des projets qui nécessitent de :
								<div style={{ marginLeft: '2rem', marginTop: '0' }}>
									- intégrer une maquette
									<br />- créer un site web responsive (blog, site
									vitrine)
									<br />- créer un site web dynamique (API, base de
									données)
								</div>
							</div> */}
							<div className={classes.text}>
								N’hésitez pas à me contacter, je ferai de mon mieux pour
								vous répondre le plus rapidement possible !
							</div>
						</>
					) : (
						<>
							<div className={classes.text}>
								Hi, I’m Michel, a full stack developer from Toulouse,
								France.
							</div>
							<div className={classes.text}>
								After graduating with a Bachelor’s degree in foreign
								languages applied to international business (LEA), I’ve
								decided to change paths and learn programming.
							</div>
							<div className={classes.text}>
								As a self-taught programmer, I aim to learn every single
								day by implementing a new technology to each new project I
								develop.
							</div>
							<div className={classes.text}>
								I consider myself as a rigorous, passionate and efficient
								programmer who knows how to adapt my way of working to the
								project.
							</div>
							{/* <div className={classes.text}>
								I am able to intervene or build from the ground up
								projects that require to:
								<div style={{ marginLeft: '2rem', marginTop: '0' }}>
									- convert mockups into a functioning website
									<br />- build a responsive website (blog, landing
									page)
									<br />- build a dynamic website (APIs, databases)
								</div>
							</div> */}
							<div className={classes.text}>
								If you have any questions, please fell free to use the
								contact form and I’ll get back to you as possible!
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default About;
