import { createSlice } from "@reduxjs/toolkit";

const flatsSlice = createSlice({
  name: "flats",
  initialState: {
    flatData: null,
  },
  reducers: {
    getFlats: (state, action) => {
      state.flatData = action.payload;
    },
  },
});

export const { getFlats } = flatsSlice.actions;

export default flatsSlice.reducer;
