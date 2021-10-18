import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classes from './Footer.module.scss';

import linkedinIcon from '../../../assets/icons/linkedin.svg';
import maltIcon from '../../../assets/icons/malt.svg';
import githubIcon from '../../../assets/icons/github.svg';
import { RootState } from '../../../store/store';

const Footer: React.FC = () => {
	const french = useSelector((state: RootState) => state.language.french);

	return (
		<div className={classes.wrapper}>
			<div className={classes.links}>
				<a
					href='https://www.linkedin.com/in/michel-lamarliere/'
					target='_blank'
					rel='noreferrer'
				>
					<img src={linkedinIcon} alt='' className={classes.links_logo} />
				</a>
				<a
					href='https://www.malt.fr/dashboard/freelancer'
					target='_blank'
					rel='noreferrer'
				>
					<img src={maltIcon} alt='' className={classes.links_logo} />
				</a>
				<a
					href='https://github.com/michel-lamarliere'
					target='_blank'
					rel='noreferrer'
				>
					<img src={githubIcon} alt='' className={classes.links_logo} />
				</a>
				<Link to='/legalnotice' className={classes.links_text}>
					{french ? 'Mentions Légales' : 'Legal Notice'}
				</Link>
			</div>
			<div className={classes.shoutout}>
				{french ? 'Par' : 'By'}
				<span className={classes.shoutout_text}>&nbsp;Michel Lamarlière</span>
			</div>
			<div className={classes.shoutout}>
				<div>
					{french ? 'Logo et Web Design par' : 'Logo et Web Design by'}
					<a
						href='https://www.enolalouge.com'
						target='_blank'
						rel='noreferrer'
						className={classes.shoutout_link}
					>
						&nbsp;Enola Louge
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
