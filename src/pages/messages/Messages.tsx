import React, { FC } from 'react';
import { MessagesLGPage } from './layouts/lg/Messages.lg';
import styles from './Messages.module.css';
import { IMessagesProps } from './Messages.types';

export const Messages: FC<IMessagesProps> = () => {
  return <MessagesLGPage />;
};
