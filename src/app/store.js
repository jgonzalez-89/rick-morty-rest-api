import { configureStore } from "@reduxjs/toolkit";
import propsReducer from "../features/props/propsSlice";

export const store = configureStore({
  reducer: {
    tasks: propsReducer,
  },
});
