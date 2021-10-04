import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Footer.module.scss';

import linkedinIcon from '../../../assets/icons/linkedin.svg';
import maltIcon from '../../../assets/icons/malt.svg';
import githubIcon from '../../../assets/icons/github-white.svg';

const Footer: React.FC = () => {
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
					Mentions Légales
				</Link>
			</div>
			<div className={classes.shoutout}>
				Par&nbsp;<span className={classes.shoutout_link}>Michel Lamarlière</span>
			</div>
			<div className={classes.shoutout}>
				<div>
					Logo et Web Design par&nbsp;
					<a
						href='http://www.enolalouge.com'
						target='_blank'
						rel='noreferrer'
						className={classes.shoutout_link}
					>
						Enola Louge
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
