import { createStore, combineReducers } from 'redux';

import filterReducer from './filter';
import languageReducer from './language';
import mobileMenuReducer from './mobileMenu';
import themeReducer from './theme';

const store = createStore(
	combineReducers({
		filter: filterReducer,
		mobileMenu: mobileMenuReducer,
		language: languageReducer,
		theme: themeReducer,
	})
);
export type RootState = ReturnType<typeof store.getState>;

export default store;
