import { combineReducers } from '@reduxjs/toolkit';
import misMatchSlice from './Slice/misMatchSlice/misMatchSlice';

const rootReducer = combineReducers({
    misMatch: misMatchSlice
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer