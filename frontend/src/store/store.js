import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import flatsReducer from "./flatsSlice";
import filterReducer from "./filterSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    flats: flatsReducer,
    filters: filterReducer,
  },
});

export default store;
