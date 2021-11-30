import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import classes from './LegalNoticeTexts.module.scss';

interface Props {
	text: string;
}

export const LegalNoticeTitle: React.FC<Props> = (props) => {
	const dark = useSelector((state: RootState) => state.theme.dark);
	const theme = useSelector((state: RootState) => state.theme);

	return (
		<div
			className={classes.title_wrapper}
			style={{ color: dark ? theme.darkTheme.white : theme.lightTheme.white }}
		>
			{props.text}
		</div>
	);
};

export const LegalNoticeSection: React.FC<Props> = (props) => {
	const dark = useSelector((state: RootState) => state.theme.dark);
	const theme = useSelector((state: RootState) => state.theme);

	return (
		<div
			className={classes.section_wrapper}
			style={{ color: dark ? theme.darkTheme.white : theme.lightTheme.white }}
		>
			{props.text}
		</div>
	);
};

export const LegalNoticeText: React.FC<Props> = (props) => {
	const dark = useSelector((state: RootState) => state.theme.dark);
	const theme = useSelector((state: RootState) => state.theme);

	return (
		<div
			className={classes.text_wrapper}
			style={{ color: dark ? theme.darkTheme.white : theme.lightTheme.white }}
		>
			{props.text}
		</div>
	);
};
