import React from 'react';
import classes from './ProjectItem.module.scss';

import githubIcon from '../../assets/icons/github.svg';
import openTabIcon from '../../assets/icons/open-tab.svg';

interface Props {
	title: string;
	img: string;
	description: string;
	stack: string[];
	website_link: string;
	github_link: string;
	publicGithub?: boolean;
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
						<a href={props.github_link} target='_blank' rel='noreferrer'>
							<img src={githubIcon} alt='github link' />
						</a>
					) : (
						<div className={classes.empty}></div>
					)}
					<a href={props.website_link} target='_blank' rel='noreferrer'>
						<img src={openTabIcon} alt='new tab link' />
					</a>
				</div>
			</div>
		</div>
	);
};

ProjectItem.defaultProps = {
	publicGithub: true,
};

export default ProjectItem;
