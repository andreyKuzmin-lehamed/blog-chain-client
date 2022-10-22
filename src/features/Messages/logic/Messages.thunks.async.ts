import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppThunk, RootState } from 'src/store/store';
import { MessagesActions } from './../state/Messages.slice';
import { defaultService } from './services/Messages.default.services';
import { IMessagesState, IMessagesConfig } from './../state/Messages.types';

let MessagesConfig: IMessagesConfig;

const fetchAuthorMessages = async (testArg: any, thunkApi: any) => {
  const messages = [
    {
      id: '0001',
      author: { wallet: '{{wallet}}' },
      text: 'Текст сообщения 1',
    },
    {
      id: '0002',
      author: { wallet: '{{wallet}}' },
      text: 'Текст сообщения 2',
    },
    {
      id: '0003',
      author: { wallet: '{{wallet}}' },
      text: 'Текст сообщения 3',
    },
  ];

  thunkApi.dispatch(MessagesActions.setMessages(messages));
};

export const MessagesExtraReducers = {
  'thunk/testAsyncThunk/pending': (state: IMessagesState) => {
    console.log('pending');
  },
  'thunk/testAsyncThunk/fulfilled': (state: IMessagesState) => {
    console.log('fulfilled');
  },
  'thunk/testAsyncThunk/rejected': (state: IMessagesState) => {
    console.log('rejected');
  },
};

export const MessagesThunksCallbacksAsync = {
  fetchAuthorMessages,
};
