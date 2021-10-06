import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import classes from './Socials.module.scss';

import TitleLign from '../../_UI/TitleLign';

import linkedinIcon from '../../../assets/icons/linkedin.svg';
import maltIcon from '../../../assets/icons/malt.svg';
import githubIcon from '../../../assets/icons/github.svg';

const Socials: React.FC = () => {
	const french = useSelector((state: RootState) => state.language.french);

	return (
		<div className={classes.wrapper}>
			<TitleLign
				className={classes.title_lign}
				text={french ? 'Me suivre' : 'My Socials'}
			/>
			<div className={classes.socials}>
				<a
					href='https://www.linkedin.com/in/michel-lamarliere/'
					target='_blank'
					rel='noreferrer'
				>
					<img src={linkedinIcon} alt='' className={classes.socials_logo} />
				</a>
				<a
					href='https://www.malt.fr/dashboard/freelancer'
					target='_blank'
					rel='noreferrer'
				>
					<img src={maltIcon} alt='' className={classes.socials_logo} />
				</a>
				<a
					href='https://github.com/michel-lamarliere'
					target='_blank'
					rel='noreferrer'
				>
					<img src={githubIcon} alt='' className={classes.socials_logo} />
				</a>
			</div>
		</div>
	);
};

export default Socials;
