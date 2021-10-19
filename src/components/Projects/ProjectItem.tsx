import React from 'react';
import classes from './ProjectItem.module.scss';

import githubIcon from '../../assets/icons/github.svg';
import openTabIcon from '../../assets/icons/open-tab.svg';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { GitHubLogo, NewTabLogo } from '../_UI/Logos';

interface Props {
	title: string;
	img: string;
	description: string;
	stack: string[];
	websiteLink: string;
	githubLink: string;
	publicGithub?: boolean;
	goToWebsite?: boolean;
}

const ProjectItem: React.FC<Props> = (props) => {
	const dark = useSelector((state: RootState) => state.theme.dark);
	const theme = useSelector((state: RootState) => state.theme);

	return (
		<div
			className={classes.wrapper}
			style={{
				backgroundColor: dark
					? theme.darkTheme.darkGrey
					: theme.lightTheme.darkGrey,
			}}
		>
			<img className={classes.main_img} src={props.img} alt={props.title} />
			<div className={classes.bottom}>
				<div
					className={classes.title}
					style={{
						color: dark ? theme.darkTheme.white : theme.lightTheme.white,
					}}
				>
					{props.title}
				</div>
				<div className={classes.description}>{props.description}</div>
				<div className={classes.stack}>
					{props.stack.map((item) => (
						<img className={classes.stack_item} src={item} alt='logo' />
					))}
				</div>
				<div className={classes.links}>
					{props.publicGithub ? (
						<a href={props.githubLink} target='_blank' rel='noreferrer'>
							<GitHubLogo
								fill={
									dark ? theme.darkTheme.white : theme.lightTheme.white
								}
							/>
						</a>
					) : (
						<div className={classes.empty}></div>
					)}
					{props.goToWebsite ? (
						<a href={props.websiteLink} target='_blank' rel='noreferrer'>
							<NewTabLogo
								fill={
									dark ? theme.darkTheme.white : theme.lightTheme.white
								}
							/>
						</a>
					) : (
						<div className={classes.empty}></div>
					)}
				</div>
			</div>
		</div>
	);
};

ProjectItem.defaultProps = {
	publicGithub: true,
	goToWebsite: true,
};

export default ProjectItem;
