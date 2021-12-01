import React from 'react';
import classes from './StackItem.module.scss';

import { useSelector } from 'react-redux';
import { RootState } from '../../shared/store/store';

interface Props {
	img?: string;
	text: string;
	alt: string;
	svg?: HTMLOrSVGElement;
}

const StackItem: React.FC<Props> = (props) => {
	const dark = useSelector((state: RootState) => state.theme.dark);
	const theme = useSelector((state: RootState) => state.theme);

	return (
		<div className={classes.wrapper}>
			<img src={props.img} alt={props.alt} className={classes.img} />
			<div
				className={classes.text}
				style={{ color: dark ? theme.darkTheme.white : theme.lightTheme.white }}
			>
				{props.text}
			</div>
		</div>
	);
};

export const ThemedStackItem: React.FC<Props> = (props) => {
	const dark = useSelector((state: RootState) => state.theme.dark);
	const theme = useSelector((state: RootState) => state.theme);

	return (
		<div className={classes.wrapper}>
			<div className={classes.img}>{props.children}</div>
			<div
				className={classes.text}
				style={{ color: dark ? theme.darkTheme.white : theme.lightTheme.white }}
			>
				{props.text}
			</div>
		</div>
	);
};

export default StackItem;
