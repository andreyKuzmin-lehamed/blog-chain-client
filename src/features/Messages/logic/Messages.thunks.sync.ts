import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppThunk, RootState } from 'src/store/store';
import { MessagesActions } from './../state/Messages.slice';
import { defaultService } from './services/Messages.default.services';
import { IMessage, IMessagesState } from './../state/Messages.types';

const testSyncThunk = (): AppThunk => (dispatch, getState) => {
  dispatch(MessagesActions.setMessages([] as IMessage[]));
};

export const MessagesThunksCallbacksSync = {
  testSyncThunk,
};
