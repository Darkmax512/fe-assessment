import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: {
    state: "",
    carKind: "",
  },
};

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setFilter(state, { payload }) {
      state.filter = { ...state.filter, ...payload };
    },
  },
});

export const { setFilter } = appSlice.actions;
export const getFilters = (state: any) => state.app.filter;
export default appSlice.reducer;
