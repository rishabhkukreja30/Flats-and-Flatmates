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
    addFlat: (state, action) => {
      state.flatData.push(action.payload);
    },
    deleteFlat: (state, action) => {
      state.flatData = state.flatData?.filter(
        (flat) => flat._id !== action.payload
      );
    },
  },
});

export const { getFlats, deleteFlat, addFlat } = flatsSlice.actions;

export default flatsSlice.reducer;
