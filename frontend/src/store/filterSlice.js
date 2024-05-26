import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: "",
  rentRange: 100000,
  availability: "",
  tenants: {
    Family: false,
    Male: false,
    Female: false,
    Anyone: false,
  },
  furnishing: {
    Full: false,
    Semi: false,
    None: false,
  },
  bhk: {
    "1BHK": false,
    "2BHK": false,
    "3BHK": false,
    "4BHK+": false,
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateFilters: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    resetFilters: () => {
      return initialState;
    },
  },
});

export const { updateFilters, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
