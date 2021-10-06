import React from 'react';

const initialStateReducer = {
	dark: true,
};

interface initialStateObj {
	dark: boolean;
}

interface actionObj {
	type: string;
}

const themeReducer = (
	state: initialStateObj = initialStateReducer,
	action: actionObj
) => {
	if (action.type === 'THEME TOGGLE') {
		return {
			dark: !state.dark,
		};
	}

	return state;
};

export default themeReducer;
