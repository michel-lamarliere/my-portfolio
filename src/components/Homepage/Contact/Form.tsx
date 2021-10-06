import React from 'react';
import classes from './Form.module.scss';

const Form: React.FC = () => {
	return (
		<div className={classes.wrapper}>
			<form>
				<input />
				<input />
				<textarea rows={5} />
			</form>
		</div>
	);
};

export default Form;
