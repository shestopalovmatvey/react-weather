import { combineReducers, configureStore } from "@reduxjs/toolkit";
import inputReducer from './inputText/inputText.slice'
import currentWeather from "./currentWeather/currentWeather.slice";
import listOfWeather from './listOfCity/listOfCity.slice'

const reducers = combineReducers({
    input: inputReducer,
    weather: currentWeather,
    arrayOfWeather: listOfWeather, 
})

export const store = configureStore({
    reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch