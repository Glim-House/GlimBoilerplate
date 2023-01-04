import {combineReducers} from 'redux';
import {counterSlice} from '../slices/counter.slice';

export const rootReducer = combineReducers({
  counter: counterSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
