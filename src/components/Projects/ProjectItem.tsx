import React from 'react';
import classes from './ProjectItem.module.scss';

interface Props {
	title: string;
	description: string;
	stack: string[];
}

const ProjectItem: React.FC<Props> = (props) => {
	return (
		<div className={classes.wrapper}>
			<img src='' />
			<div className={classes.bottom}>
				<div className={classes.title}>{props.title}</div>
				<div className={classes.description}>{props.description}</div>
				<div className={classes.stack}>
					{props.stack.map((item) => (
						<img className={classes.stack_item} src={item} alt='logo' />
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectItem;
