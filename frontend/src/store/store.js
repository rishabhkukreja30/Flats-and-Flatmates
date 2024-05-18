import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import flatsReducer from "./flatsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    flats: flatsReducer,
  },
});

export default store;
