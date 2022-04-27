const initialStateReducer = {
	all: true,
	react: false,
	redux: false,
	typescript: false,
	firebase: false,
	googleCloud: false,
	wordpress: false,
	api: false,
	nodejs: false,
	expressjs: false,
	mongodb: false,
};

interface initialStateObj {
	all: boolean;
	react: boolean;
	redux: boolean;
	typescript: boolean;
	firebase: boolean;
	googleCloud: boolean;
	wordpress: boolean;
	api: boolean;
	nodejs: boolean;
	expressjs: boolean;
	mongodb: boolean;
	[techno: string]: boolean;
}

interface actionObj {
	type: string;
}

const filterReducer = (
	state: initialStateObj = initialStateReducer,
	action: actionObj
) => {
	switch (action.type) {
		case 'ALL':
			return {
				...state,
				all: !state.all,
			};
		case 'REACT':
			return {
				...state,
				react: !state.react,
			};
		case 'REDUX':
			return {
				...state,
				redux: !state.redux,
			};
		case 'TYPESCRIPT':
			return {
				...state,
				typescript: !state.typescript,
			};
		case 'FIREBASE':
			return {
				...state,
				firebase: !state.firebase,
			};
		case 'GOOGLECLOUD':
			return {
				...state,
				googleCloud: !state.googleCloud,
			};
		case 'WORDPRESS':
			return {
				...state,
				wordpress: !state.wordpress,
			};
		case 'API':
			return {
				...state,
				api: !state.api,
			};
		case 'NODEJS':
			return {
				...state,
				nodejs: !state.api,
			};
		case 'EXPRESSJS':
			return {
				...state,
				expressjs: !state.api,
			};
		case 'MONGODB':
			return {
				...state,
				mongodb: !state.api,
			};
		case 'RESET':
			return {
				all: false,
				react: false,
				redux: false,
				typescript: false,
				googleCloud: false,
				firebase: false,
				wordpress: false,
				api: false,
				nodejs: false,
				expressjs: false,
				mongodb: false,
			};
		default:
			return state;
	}
};

export default filterReducer;
