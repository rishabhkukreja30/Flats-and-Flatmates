import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.status = true;
      state.userData = action.payload;
    },
    removeUser: (state) => {
      state.status = false;
      state.userData = null;
    },
    addFlatToListings: (state, action) => {
      state.userData.listings.push(action.payload);
    },
    removeFlatFromListings: (state, action) => {
      state.userData.listings = state.userData.listings.filter(
        (listing) => listing !== action.payload
      );
    },
  },
});

export const {
  addUser,
  removeUser,
  addFlatToListings,
  removeFlatFromListings,
} = userSlice.actions;

export default userSlice.reducer;
