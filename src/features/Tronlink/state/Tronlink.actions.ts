import { PayloadAction } from '@reduxjs/toolkit';
import { ITronlinkState } from './Tronlink.types';

function testAction(
  state: ITronlinkState,
  { payload: testArg }: PayloadAction<any>
) {
  state.test = testArg;
}

export const TronlinkReducers = {
  testAction,
}