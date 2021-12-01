const initialStateReducer = {
	dark: true,
	darkTheme: {
		white: '#ffffff',
		black: '#000000',
		grey: '#3b3c48',
		darkGrey: '#2d3246',
		veryDarkGrey: '#1d1e27',
	},
	lightTheme: {
		white: '#2d3246',
		black: '#ffffff',
		grey: '#f3f3f9',
		darkGrey: '#f3f3f9',
		veryDarkGrey: '#ffffff',
	},
};

interface themeObj {
	white: string;
	black: string;
	grey: string;
	darkGrey: string;
	veryDarkGrey: string;
}

interface initialStateObj {
	dark: boolean;
	darkTheme: themeObj;
	lightTheme: themeObj;
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
			darkTheme: state.darkTheme,
			lightTheme: state.lightTheme,
		};
	}

	return state;
};

export default themeReducer;
