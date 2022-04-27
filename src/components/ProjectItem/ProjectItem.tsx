import React from 'react';
import classes from './ProjectItem.module.scss';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { LogoGitHub, LogoNewTab } from '../UI/SVGLogos';

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
			<div className={classes['main-img']}>
				<img className={classes['main-img']} src={props.img} alt={props.title} />
			</div>
			<div className={classes.footer}>
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
							<LogoGitHub
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
							<LogoNewTab
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
