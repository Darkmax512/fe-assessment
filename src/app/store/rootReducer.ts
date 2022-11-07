import { mainApi } from "./mainApi";
import { combineReducers } from "@reduxjs/toolkit";
import app from "./app/appSlice";

const rootReducer = combineReducers({
  app,
  [mainApi.reducerPath]: mainApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
