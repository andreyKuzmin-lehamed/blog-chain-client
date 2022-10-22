import { IAuthor } from 'src/store/store.types';
import { IMessage, IMessagesState } from './Messages.types';

export const MessagesInitialState: IMessagesState = {
  author: {} as IAuthor,
  messages: [] as IMessage[],
};
