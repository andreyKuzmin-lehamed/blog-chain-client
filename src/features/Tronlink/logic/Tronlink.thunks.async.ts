import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppThunk, RootState } from 'src/store/store';
import { TronlinkActions } from './../state/Tronlink.slice';
import { connectService } from './services/Tronlink.connect.services';
import { callService } from './services/Tronlink.call.services';
import {
  ITronlinkState,
  ITronlinkConfig,
} from './../state/Tronlink.types';

let TronlinkConfig: ITronlinkConfig;

const testAsyncThunk = async (testArg: any, thunkApi: any) => {
  console.log(TronlinkConfig.featureName);
}

export const TronlinkExtraReducers = {
  'thunk/testAsyncThunk/pending': (state: ITronlinkState) => {
    console.log('pending');
  },
  'thunk/testAsyncThunk/fulfilled': (state: ITronlinkState) => {
    console.log('fulfilled');
  },
  'thunk/testAsyncThunk/rejected': (state: ITronlinkState) => {
    console.log('rejected');
  }
}

export const TronlinkThunksCallbacksAsync = {
  testAsyncThunk
};