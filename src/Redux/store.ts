import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

export const createStore = () => configureStore({
  reducer: rootReducer
});

export const store = createStore()

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
