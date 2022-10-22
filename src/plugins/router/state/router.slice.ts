import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./../../../store/store";
import { routerInitialState } from "./router.state";

export const routerDataSlice = createSlice({
  name: "routerSlice",
  initialState: routerInitialState,
  reducers: {},
});

export const selectRouterData = (state: RootState) => state.routerData;

export default routerDataSlice.reducer;
