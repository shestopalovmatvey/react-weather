import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInputState {
    inputText: string
}

const initialState: IInputState = {
    inputText: '',
}

export const inputTextSlice = createSlice({
    name: 'currentCity',
    initialState,
    reducers: {
        setInputText: (state, action: PayloadAction<string>) => {
            state.inputText = action.payload
        }
    }
})

export const { setInputText } = inputTextSlice.actions;
export default inputTextSlice.reducer;