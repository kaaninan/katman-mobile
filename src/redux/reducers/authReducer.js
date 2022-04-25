const initialState = {
	loggedIn: false,
	user: {}
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN': {
			return {
				...state,
				loggedIn: true,
				user: action.payload
			}
		}
		case 'LOGOUT': {
			return {
				...state,
				loggedIn: false,
				user: {}
			}
		}
		default: {
			return state;
		}
	}
};

export default authReducer;