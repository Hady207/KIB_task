import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./reducers/post";

export const store = configureStore({
  reducer: {
    post: postReducer,
  },
});
