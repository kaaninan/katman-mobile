// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import authReducer from './authReducer';
import deviceReducer from './deviceReducer';
import settingsReducer from './settingsReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
	authReducer: authReducer,
	deviceReducer: deviceReducer,
	settingsReducer: settingsReducer,
});

// Exports
export default rootReducer;