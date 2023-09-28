import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWeatherObject } from "../../type";

const initialState:IWeatherObject = {
    location: null,
    current: null,
}

const currentWeather = createSlice({
    name: 'listOfCity',
    initialState,
    reducers: {
        updateWeather: (state, action: PayloadAction<IWeatherObject>) => {
            state.location = action.payload.location
            state.current = action.payload.current
        }
    }
})

export const { updateWeather } = currentWeather.actions;
export default currentWeather.reducer;