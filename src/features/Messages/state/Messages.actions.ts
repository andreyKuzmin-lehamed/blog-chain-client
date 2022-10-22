import { PayloadAction } from '@reduxjs/toolkit';
import { IMessage, IMessagesState } from './Messages.types';

function setMessages(
  state: IMessagesState,
  { payload: messages }: PayloadAction<IMessage[]>
) {
  state.messages = messages;
}

export const MessagesReducers = {
  setMessages,
};
