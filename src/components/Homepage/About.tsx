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
					{french ? (
						<>
							<p>
								Je m’appelle Michel et je suis Dévelopeur Front-End basé
								sur Toulouse.
							</p>
							<p>
								Autodidacte, j’apprends et je m’améliore un peu plus
								chaque jours.
							</p>
							<p>
								Rigoureux, passionné, curieux et efficace dans mon
								travail, je sais m’adapter afin de créer des sites
								rapides, responsive et sécurisés.
							</p>
							<p>
								Je peux intervenir dans des projets de type : ⁃ site
								vitrine, intégration responsive, refonte de site web ⁃
								Application full web, Dashboard ⁃ Blog, portfolio,
								e-commerce Et bien plus encore…
							</p>
							<p>
								N’hésitez pas à me contacter, je vous répondrai rapidement
								!
							</p>
						</>
					) : (
						''
					)}
				</div>
			</div>
		</>
	);
};

export default Presentation;
