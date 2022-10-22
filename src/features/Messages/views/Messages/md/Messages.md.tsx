import React, { FC } from 'react';
import styles from './Messages.md.module.css';
import { IMessagesProps } from './Messages.md.types';
import { Info } from './modules/Info/Info.md';
import { Message } from './modules/Message/Message.md';


export const Messages :FC<IMessagesProps> = () => {
  return (
    <>
      <Info/>      <Message/>

    </>
  );
};
