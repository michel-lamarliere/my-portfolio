const initialStateReducer = {
	french: true,
};

interface initialStateObj {
	french: boolean;
}

interface actionObj {
	type: string;
}

const languageReducer = (
	state: initialStateObj = initialStateReducer,
	action: actionObj
) => {
	if (action.type === 'LANGUAGE TOGGLE') {
		return {
			french: !state.french,
		};
	}

	return state;
};

export default languageReducer;
