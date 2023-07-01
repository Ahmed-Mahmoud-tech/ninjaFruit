import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user";
import styleReducer from "./slices/style";

export const store = configureStore({
  reducer: {
    user: userReducer,
    style: styleReducer,
  },
});
