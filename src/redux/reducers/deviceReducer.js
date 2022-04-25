const initialState = {
	// BluetoothManager
	device: null,
	manager: null,
	
	// Status
	isConnected: false,

	// Details
	name: null,
	serialNumber: null,
	firmwareRevision: null,
	hardwareRevision: null,
};

const deviceReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CONNECT': {

			return {
				...state,
				device: action.payload.device,
				manager: action.payload.manager,
				isConnected: true,
				name: action.payload.name,
				serialNumber: action.payload.serialNumber,
				firmwareRevision: action.payload.firmwareRevision,
				hardwareRevision: action.payload.hardwareRevision,
			}
		}
		case 'DISCONNECT': {
			state.manager.cancelTransaction('batteryState')
			state.manager.cancelTransaction('batteryLevel')
			state.manager.cancelTransaction('wifiStatus')
			state.manager.cancelTransaction('thermalcam')
			// state.device.cancelConnection()
			// 	.then(e => {})
			// 	.catch(error => {})
			// // state.manager.destroy()

			return {
				...state,
				device: null,
				isConnected: false,
				name: null,
				serialNumber: null,
				firmwareRevision: null,
				hardwareRevision: null,
			}
		}
		default: {
			return state;
		}
	}
};

export default deviceReducer;