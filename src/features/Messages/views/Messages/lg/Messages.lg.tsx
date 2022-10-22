import React, { FC } from 'react';
import styles from './Messages.lg.module.css';
import { IMessagesProps } from './Messages.lg.types';
import { Info } from './modules/Info/Info.lg';
import { Message } from './modules/Message/Message.lg';


export const Messages :FC<IMessagesProps> = () => {
  return (
    <>
      <Info/>      <Message/>

    </>
  );
};
