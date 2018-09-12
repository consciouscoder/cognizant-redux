const initialState = {
    temperature: 0,
    tempHigh: 0,
    tempLow: 0,
    tempHighTime: 0,
    tempLowTime: 0,
    summary: '',
    precipProbability: 0,
    precipType: '',
    humidity: 0,
    uvIndex: 0
};

export default function myReducer (state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case "UPDATE_WEATHER":
            return {
                temperature: action.payload.temperature,
                tempHigh: action.payload.tempHigh,
                tempLow: action.payload.tempLow,
                tempHighTime: action.payload.tempHighTime,
                tempLowTime: action.payload.tempLowTime,
                precipProbability: action.payload.precipProbability,
                precipType: action.payload.precipType,
                humidity: action.payload.humidity,
                uvIndex: action.payload.uvIndex,
                summary: action.payload.summary
            };
        default:
            return state;
    }
}