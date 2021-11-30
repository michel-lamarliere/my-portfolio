import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import classes from './TitleLign.module.scss';

interface Props {
	text: string;
	className?: string;
}

const Lign: React.FC<Props> = (props) => {
	const dark = useSelector((state: RootState) => state.theme.dark);
	const theme = useSelector((state: RootState) => state.theme);

	return (
		<div className={`${classes.wrapper} ${props.className}`}>
			<div
				className={classes.title}
				style={{
					color: dark ? theme.darkTheme.white : theme.lightTheme.white,
				}}
			>
				{props.text}
			</div>
			<span
				className={classes.lign}
				style={{
					backgroundColor: dark
						? theme.darkTheme.white
						: theme.lightTheme.white,
				}}
			></span>
		</div>
	);
};

export default Lign;
