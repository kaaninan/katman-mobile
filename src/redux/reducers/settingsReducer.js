const initialState = {
	recordLength: 15
};

const settingsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE': {
			return {
				...state,
				recordLength: action.payload.value
			}
		}
		default: {
			return state;
		}
	}
};

export default settingsReducer;