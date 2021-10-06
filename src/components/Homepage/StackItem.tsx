import React from 'react';
import classes from './StackItem.module.scss';

interface Props {
	img: string;
	text: string;
	alt: string;
}

const StackItem: React.FC<Props> = (props) => {
	return (
		<div className={classes.wrapper}>
			<img src={props.img} alt={props.alt} className={classes.img} />
			<div className={classes.text}>{props.text}</div>
		</div>
	);
};

export default StackItem;
