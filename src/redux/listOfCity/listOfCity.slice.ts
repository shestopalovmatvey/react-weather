import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWeatherObject } from "../../type";

const initialState: IWeatherObject[] = []

const listOfCity = createSlice({
    name: 'listOfCity',
    initialState,
    reducers: {
        addCity: (state, action: PayloadAction<IWeatherObject>) => {
            state.push(action.payload)
        }
    }
})

export const { addCity } = listOfCity.actions
export default listOfCity.reducer;