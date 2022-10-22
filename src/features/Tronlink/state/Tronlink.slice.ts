import { createSlice } from '@reduxjs/toolkit';
import { createThunksForExport } from 'src/store/store.services';
import { RootState } from 'src/store/store';
import { TronlinkReducers } from './Tronlink.actions';
import { TronlinkInitialState } from './Tronlink.state';
import { TronlinkThunksCallbacksAsync } from './../logic/Tronlink.thunks.async';
import { TronlinkThunksCallbacksSync } from './../logic/Tronlink.thunks.sync';

export const TronlinkThunks: any = createThunksForExport({
  async: TronlinkThunksCallbacksAsync,
  sync: TronlinkThunksCallbacksSync
})

export const TronlinkDataSlice = createSlice({
  name: 'TronlinkData',
  initialState: TronlinkInitialState,
  reducers: TronlinkReducers
})

export const TronlinkStaticData = (state: RootState) =>
  state.TronlinkData;

export const TronlinkActions = TronlinkDataSlice.actions;

export default TronlinkDataSlice.reducer;
