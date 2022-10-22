import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppThunk, RootState } from 'src/store/store';
import { MessagesActions } from './../state/Messages.slice';
import { defaultService } from './services/Messages.default.services';
import { IMessagesState } from './../state/Messages.types';

const testSyncThunk = (): AppThunk => (dispatch, getState) => {
  dispatch(MessagesActions.testAction('testArg'));
}

export const MessagesThunksCallbacksSync = {
  testSyncThunk
}