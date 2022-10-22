import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppThunk, RootState } from 'src/store/store';
import { TronlinkActions } from './../state/Tronlink.slice';
import { connectService } from './services/Tronlink.connect.services';
import { callService } from './services/Tronlink.call.services';
import { ITronlinkState } from './../state/Tronlink.types';

const testSyncThunk = (): AppThunk => (dispatch, getState) => {
  dispatch(TronlinkActions.testAction('testArg'));
}

export const TronlinkThunksCallbacksSync = {
  testSyncThunk
}