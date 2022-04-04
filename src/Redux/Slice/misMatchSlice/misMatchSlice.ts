import { createSlice } from '@reduxjs/toolkit';
import { IStateMisMatch } from './misMatchType';

const initalStates:IStateMisMatch = {
    isError: '',
    value: '',
    isActive:false

}

const misMatchSlice = createSlice({
    name: 'misMatch',
    initialState: initalStates,
    reducers: {
        update(state, action:{payload:IStateMisMatch}) {
            state.isError = action.payload.isError;
            state.value = action.payload.value;
            state.isActive = action.payload.isActive
        }
    }
})

export const {
    update
} = misMatchSlice.actions;

export default misMatchSlice.reducer