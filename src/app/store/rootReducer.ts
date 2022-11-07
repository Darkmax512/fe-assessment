import { mainApi } from "./mainApi";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  [mainApi.reducerPath]: mainApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
