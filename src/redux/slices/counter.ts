import { ICounterSlice } from '@/@types/counter';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ICounterSlice = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: ICounterSlice) => {
      state.value += 1;
    },
    decrement: (state: ICounterSlice) => {
      state.value -= 1;
    },
    incrementByAmount: (state: ICounterSlice, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
