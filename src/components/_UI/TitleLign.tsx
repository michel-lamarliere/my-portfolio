import React from 'react';
import classes from './TitleLign.module.scss';

interface Props {
	text: string;
	className?: string;
}

const Lign: React.FC<Props> = (props) => {
	return (
		<div className={`${classes.wrapper} ${props.className}`}>
			<div className={classes.title}>{props.text}</div>
			<span className={classes.lign}></span>
		</div>
	);
};

export default Lign;
