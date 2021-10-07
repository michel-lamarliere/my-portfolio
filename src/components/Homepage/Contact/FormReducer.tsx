import React, { useReducer, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import classes from './Form.module.scss';

const initialState = {
	name: '',
	nameIsValid: false,
	nameIsTouched: false,
	email: '',
	emailIsValid: false,
	emailIsTouched: false,
	message: '',
	messageIsValid: false,
	messageIsTouched: false,
};

// const initialState = [
// 	{
// 		name: '',
// 		nameIsValid: false,
// 		nameIsTouched: false,
// 	},
// 	{
// 		email: '',
// 		emailIsValid: false,
// 		emailIsTouched: false,
// 	},
// 	{
// 		message: '',
// 		messageIsValid: false,
// 		messageIsTouched: false,
// 	},
// ];

interface initialStateObj {
	name: string;
	email: string;
	message: string;
}

interface actionObj {
	type: string;
	field: any;
	payload: any;
}

const formReducer = (state: initialStateObj, action: actionObj) => {
	switch (action.type) {
		case 'INPUT':
			return {
				...state,
				[action.field]: action.payload,
			};
		default:
			return state;
	}
};

const Form: React.FC = () => {
	const french = useSelector((state: RootState) => state.language.french);
	const [formInputs, formDispatch] = useReducer(formReducer, initialState);
	const [sent, setSent] = useState(true);

	const isValid = () => {};

	const submitHandler = (event: React.MouseEvent) => {
		setSent(true);

		setTimeout(() => {
			setSent(false);
		}, 3000);
	};

	const inputHandler = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		formDispatch({
			type: 'INPUT',
			field: event.target.name,
			payload: event.target.value,
		});

		if (event.target.name === 'name') {
		}
	};

	return (
		<div className={classes.wrapper}>
			<form
				className={classes.form}
				action='https://formsubmit.co/contact@michel-lamarliere.com'
				method='POST'
				target='#iframe'
			>
				<input
					type='text'
					name='name'
					placeholder={french ? 'Nom' : 'Name'}
					value={formInputs.name}
					onChange={(event) => inputHandler(event)}
				/>
				<input
					type='text'
					name='email'
					placeholder='E-mail'
					value={formInputs.email}
					onChange={(event) => inputHandler(event)}
				/>
				<textarea
					rows={10}
					name='message'
					placeholder='Message'
					value={formInputs.message}
					onChange={(event) => inputHandler(event)}
				/>
				<button onClick={submitHandler} type='submit' className={classes.submit}>
					Envoyer
				</button>
				{sent && (
					<div className={classes.sent}>
						{french
							? 'Votre message a bien été envoyé !'
							: 'Your message was sent!'}
					</div>
				)}
			</form>
			<iframe style={{ display: 'none' }} id='iframe' />
		</div>
	);
};

export default Form;
