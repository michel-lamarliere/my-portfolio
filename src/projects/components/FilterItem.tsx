import React from 'react';
import classes from './FilterItem.module.scss';

import { useSelector } from 'react-redux';
import { RootState } from '../../shared/store/store';

interface FilterItemProps {
	onClick: () => {};
	border: string;
	logo?: boolean;
	src?: string;
	alt?: string;
	text: string;
}

const FilterItem: React.FC<FilterItemProps> = (props) => {
	const dark = useSelector((state: RootState) => state.theme.dark);
	const theme = useSelector((state: RootState) => state.theme);

	return (
		<button
			className={classes.wrapper}
			style={{
				backgroundColor: dark ? theme.darkTheme.grey : theme.lightTheme.grey,
				border: props.border,
			}}
			onClick={props.onClick}
		>
			{props.logo ? (
				<img className={classes.img} src={props.src} alt={props.alt} />
			) : (
				''
			)}
			<div
				className={classes.text}
				style={{ color: dark ? theme.darkTheme.white : theme.lightTheme.white }}
			>
				{props.text}
			</div>
		</button>
	);
};

FilterItem.defaultProps = {
	logo: true,
};

export default FilterItem;
