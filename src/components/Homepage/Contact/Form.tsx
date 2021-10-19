import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import classes from './Form.module.scss';

interface Props {
	className: string;
}

const Form: React.FC<Props> = (props) => {
	const french = useSelector((state: RootState) => state.language.french);
	const dark = useSelector((state: RootState) => state.theme.dark);
	const theme = useSelector((state: RootState) => state.theme);

	const [sent, setSent] = useState(false);
	const [name, setName] = useState({
		input: '',
		isValid: false,
		isTouched: false,
	});
	const [email, setEmail] = useState({
		input: '',
		isValid: false,
		isTouched: false,
	});
	const [message, setMessage] = useState({
		input: '',
		isValid: false,
		isTouched: false,
	});

	const nameInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.value.trim().length >= 3) {
			setName({
				...name,
				input: event.target.value,
				isValid: true,
			});
			return;
		}
		setName({
			...name,
			input: event.target.value,
		});
	};

	const nameBlurHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.value.trim().length > 0) {
			setName({
				...name,
				isTouched: true,
				isValid: true,
			});
			return;
		}
		setName({
			...name,
			isTouched: true,
			isValid: false,
		});
	};

	const emailInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (
			event.target.value.match(
				/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			)
		) {
			setEmail({
				...email,
				input: event.target.value,
				isValid: true,
			});
			return;
		}
		setEmail({
			...email,
			input: event.target.value,
		});
	};

	const emailBlurHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (
			event.target.value.match(
				/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			)
		) {
			setEmail({
				...email,
				isValid: true,
				isTouched: true,
			});
			return;
		}
		setEmail({
			...email,
			isTouched: true,
			isValid: false,
		});
	};

	const messageInputHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		if (event.target.value.trim().length >= 10) {
			setMessage({
				...message,
				input: event.target.value,
				isTouched: true,
				isValid: true,
			});
			return;
		}
		setMessage({
			...message,
			input: event.target.value,
		});
	};

	const messageBlurHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		if (event.target.value.trim().length >= 10) {
			setMessage({
				...message,
				isValid: true,
			});
			return;
		}
		setMessage({
			...message,
			isTouched: true,
			isValid: false,
		});
	};

	const submitHandler = (event: React.MouseEvent) => {
		setSent(true);

		setTimeout(() => {
			setSent(false);
		}, 3000);
	};

	const nameInputClasses = !name.isValid && name.isTouched ? classes.invalid : '';
	const emailInputClasses = !email.isValid && email.isTouched ? classes.invalid : '';
	const messageInputClasses =
		!message.isValid && message.isTouched ? classes.invalid : '';

	const allValid = name.isValid && email.isValid && message.isValid;

	// const inputBackgroundColor = dark ? theme.darkTheme.grey : theme.lightTheme.grey;
	const inputBackgroundColor = dark ? theme.darkTheme.grey : theme.lightTheme.grey;
	const inputTextColor = dark ? theme.darkTheme.white : theme.lightTheme.white;

	return (
		<div className={props.className}>
			<form
				className={classes.form}
				action='https://formsubmit.co/contact@michel-lamarliere.com'
				method='POST'
				target='iframe'
			>
				<input type='hidden' name='_captcha' value='false' />
				<input
					className={nameInputClasses}
					style={{
						backgroundColor: inputBackgroundColor,
						color: inputTextColor,
					}}
					type='text'
					name='name'
					placeholder={french ? 'Nom' : 'Name'}
					value={name.input}
					onChange={(event) => nameInputHandler(event)}
					onBlur={(event) => nameBlurHandler(event)}
				/>
				{!name.isValid && name.isTouched && (
					<div
						className={classes.invalid_text}
						style={{
							color: dark ? theme.darkTheme.white : theme.lightTheme.white,
						}}
					>
						{french
							? 'Veuillez entrer un nom valide.'
							: 'Please enter a valid name.'}
					</div>
				)}
				<input
					className={emailInputClasses}
					style={{
						backgroundColor: inputBackgroundColor,
						color: inputTextColor,
					}}
					type='text'
					name='email'
					placeholder='E-mail'
					value={email.input}
					onChange={(event) => emailInputHandler(event)}
					onBlur={(event) => emailBlurHandler(event)}
				/>
				{!email.isValid && email.isTouched && (
					<div
						className={classes.invalid_text}
						style={{
							color: dark ? theme.darkTheme.white : theme.lightTheme.white,
						}}
					>
						{french
							? 'Veuillez entrer une adresse email valide.'
							: 'Please enter a valid email address.'}
					</div>
				)}
				<textarea
					className={messageInputClasses}
					style={{
						backgroundColor: inputBackgroundColor,
						color: inputTextColor,
					}}
					rows={10}
					name='message'
					placeholder='Message'
					value={message.input}
					onChange={(event) => messageInputHandler(event)}
					onBlur={(event) => messageBlurHandler(event)}
				/>
				{!message.isValid && message.isTouched && (
					<div
						className={classes.invalid_text}
						style={{
							color: dark ? theme.darkTheme.white : theme.lightTheme.white,
						}}
					>
						{french
							? 'Veuillez entrer au moins 10 caractères.'
							: 'Please enter at least 10 characters.'}
					</div>
				)}
				<button
					disabled={!allValid}
					onClick={submitHandler}
					type='submit'
					className={classes.submit}
				>
					{french ? 'Envoyer' : 'Submit'}
				</button>
				{sent && (
					<div className={classes.sent}>
						{french
							? 'Votre message a bien été envoyé !'
							: 'Your message was sent!'}
					</div>
				)}
			</form>
			<iframe style={{ display: 'none' }} name='iframe' title='iframe' />
		</div>
	);
};

export default Form;
