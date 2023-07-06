import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const couterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
  },
});

export const { increment, decrement } = couterSlice.actions;
export default couterSlice.reducer;
