import React, { FC } from 'react';
import { MessagesLG } from 'src/features/Messages/views/Messages/lg/Messages.lg';
import styles from './Messages.lg.module.css';
import { IMessagesLGProps } from './Messages.lg.types';

export const MessagesLGPage: FC<IMessagesLGProps> = () => {
  return (
    <div>
      <MessagesLG />
    </div>
  );
};
