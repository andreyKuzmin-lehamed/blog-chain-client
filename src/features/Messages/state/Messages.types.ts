import { IAuthor } from 'src/store/store.types';

export interface IMessagesState {
  author: IAuthor;
  messages: IMessage[];
}

export interface IMessage {
  id: string;
  author: IAuthor;
  text: string;
}

export interface IMessagesConfig {
  featureName: string;
}
