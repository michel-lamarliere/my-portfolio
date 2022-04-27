import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import classes from './Socials.module.scss';

import TitleLign from '../../TitleLign/TitleLign';

import { LogoGitHub, LogoMalt, LogoLinkedin } from '../../../../components/UI/SVGLogos';

interface Props {
	className: string;
}

const Socials: React.FC<Props> = (props) => {
	const french = useSelector((state: RootState) => state.language.french);
	const dark = useSelector((state: RootState) => state.theme.dark);
	const theme = useSelector((state: RootState) => state.theme);

	return (
		<div className={`${classes.wrapper} ${props.className}`}>
			<TitleLign
				className={classes.lign}
				text={french ? 'Me suivre' : 'My Socials'}
			/>
			<div className={classes.socials}>
				<a
					href='https://www.linkedin.com/in/michel-lamarliere/'
					target='_blank'
					rel='noreferrer'
				>
					<LogoLinkedin
						className={classes.socials_logo}
						fill={dark ? theme.darkTheme.white : theme.lightTheme.white}
					/>
				</a>
				<a
					href='https://www.malt.fr/dashboard/freelancer'
					target='_blank'
					rel='noreferrer'
				>
					<LogoMalt
						className={classes.socials_logo}
						fill={dark ? theme.darkTheme.white : theme.lightTheme.white}
					/>
				</a>
				<a
					href='https://github.com/michel-lamarliere'
					target='_blank'
					rel='noreferrer'
				>
					<LogoGitHub
						className={classes.socials_logo}
						fill={dark ? theme.darkTheme.white : theme.lightTheme.white}
					/>
				</a>
			</div>
		</div>
	);
};

export default Socials;
