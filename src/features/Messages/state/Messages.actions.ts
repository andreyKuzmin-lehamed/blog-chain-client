import { PayloadAction } from '@reduxjs/toolkit';
import { IMessagesState } from './Messages.types';

function testAction(
  state: IMessagesState,
  { payload: testArg }: PayloadAction<any>
) {
  state.test = testArg;
}

export const MessagesReducers = {
  testAction,
}