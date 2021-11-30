import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import classes from './ContactDetails.module.scss';

import TitleLign from '../TitleLign';

interface Props {
	className: string;
}

const ContactDetails: React.FC<Props> = (props) => {
	const french = useSelector((state: RootState) => state.language.french);
	const dark = useSelector((state: RootState) => state.theme.dark);
	const theme = useSelector((state: RootState) => state.theme);

	const textColor = dark ? theme.darkTheme.white : theme.lightTheme.white;

	return (
		<div className={`${classes.wrapper} ${props.className}`}>
			<TitleLign
				className={classes.lign}
				text={french ? 'Me contacter' : 'My Details'}
			/>
			<div className={classes.contact}>
				<div className={classes.text} style={{ color: textColor }}>
					Michel Lamarlière
				</div>
				<div className={classes.text} style={{ color: textColor }}>
					contact@michel-lamarliere.com
				</div>
				<div className={classes.text} style={{ color: textColor }}>
					Toulouse, France
				</div>
			</div>
		</div>
	);
};

export default ContactDetails;
