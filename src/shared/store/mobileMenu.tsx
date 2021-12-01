const initialStateReducer = {
	open: false,
};

interface initialStateObj {
	open: boolean;
}

interface actionObj {
	type: string;
}

const mobileMenuReducer = (
	state: initialStateObj = initialStateReducer,
	action: actionObj
) => {
	if (action.type === 'OVERLAY TOGGLE') {
		return {
			open: !state.open,
		};
	}

	return state;
};

export default mobileMenuReducer;
