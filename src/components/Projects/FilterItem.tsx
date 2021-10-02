import React from 'react';
import classes from './FilterItem.module.scss';

interface FilterItemProps {
	onClick: () => {};
	className: string;
	logo?: boolean;
	src?: string;
	alt?: string;
	text: string;
}

const FilterItem: React.FC<FilterItemProps> = (props) => {
	return (
		<button className={`${classes.wrapper} ${props.className}`} onClick={props.onClick}>
			{props.logo ? <img className={classes.img} src={props.src} alt={props.alt} /> : ''}
			<div className={classes.text}>{props.text}</div>
		</button>
	);
};

FilterItem.defaultProps = {
	logo: true,
};

export default FilterItem;
