import { createSlice } from '@reduxjs/toolkit';
import { createThunksForExport } from 'src/store/store.services';
import { RootState } from 'src/store/store';
import { MessagesReducers } from './Messages.actions';
import { MessagesInitialState } from './Messages.state';
import { MessagesThunksCallbacksAsync } from './../logic/Messages.thunks.async';
import { MessagesThunksCallbacksSync } from './../logic/Messages.thunks.sync';

export const MessagesThunks: any = createThunksForExport({
  async: MessagesThunksCallbacksAsync,
  sync: MessagesThunksCallbacksSync
})

export const MessagesDataSlice = createSlice({
  name: 'MessagesData',
  initialState: MessagesInitialState,
  reducers: MessagesReducers
})

export const MessagesStaticData = (state: RootState) =>
  state.MessagesData;

export const MessagesActions = MessagesDataSlice.actions;

export default MessagesDataSlice.reducer;
