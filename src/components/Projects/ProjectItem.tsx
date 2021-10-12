import React from 'react';
import classes from './ProjectItem.module.scss';

import githubIcon from '../../assets/icons/github.svg';
import openTabIcon from '../../assets/icons/open-tab.svg';

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
	return (
		<div className={classes.wrapper}>
			<img className={classes.main_img} src={props.img} alt={props.title} />
			<div className={classes.bottom}>
				<div className={classes.title}>{props.title}</div>
				<div className={classes.description}>{props.description}</div>
				<div className={classes.stack}>
					{props.stack.map((item) => (
						<img className={classes.stack_item} src={item} alt='logo' />
					))}
				</div>
				<div className={classes.links}>
					{props.publicGithub ? (
						<a href={props.githubLink} target='_blank' rel='noreferrer'>
							<img src={githubIcon} alt='github link' />
						</a>
					) : (
						<div className={classes.empty}></div>
					)}
					{props.goToWebsite ? (
						<a href={props.websiteLink} target='_blank' rel='noreferrer'>
							<img src={openTabIcon} alt='new tab link' />
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
