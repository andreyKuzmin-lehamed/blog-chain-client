import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppThunk, RootState } from 'src/store/store';
import { MessagesActions } from './../state/Messages.slice';
import { defaultService } from './services/Messages.default.services';
import {
  IMessagesState,
  IMessagesConfig,
} from './../state/Messages.types';

let MessagesConfig: IMessagesConfig;

const testAsyncThunk = async (testArg: any, thunkApi: any) => {
  console.log(MessagesConfig.featureName);
}

export const MessagesExtraReducers = {
  'thunk/testAsyncThunk/pending': (state: IMessagesState) => {
    console.log('pending');
  },
  'thunk/testAsyncThunk/fulfilled': (state: IMessagesState) => {
    console.log('fulfilled');
  },
  'thunk/testAsyncThunk/rejected': (state: IMessagesState) => {
    console.log('rejected');
  }
}

export const MessagesThunksCallbacksAsync = {
  testAsyncThunk
};