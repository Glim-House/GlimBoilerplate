import {CaseReducer, createSlice, PayloadAction} from '@reduxjs/toolkit';

type StateType = {
  count: number;
};

/**
 * Default values for the counter slice
 */
const initialState: StateType = {
  count: 0,
};

/**
 * Reducer for counter slice
 */
type counterSliceReduceer<payload> = CaseReducer<
  StateType,
  PayloadAction<payload>
>;

/**
 * Increment Reducer that add one value from the state
 */
const increment: counterSliceReduceer<null> = state => {
  state.count = state.count + 1;
};

/**
 * Decrement Reducer that reduce one value from the state
 */
const decrement: counterSliceReduceer<null> = state => {
  state.count = state.count - 1;
};

/**
 * Counter Slice for counter component
 */
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment,
    decrement,
  },
});

export {counterSlice};
