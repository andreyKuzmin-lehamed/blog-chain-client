import React, { FC } from 'react';
import styles from './Message.lg.module.css';
import { IMessageProps } from './Message.lg.types';
import { Info } from './modules/Info/Info.lg';
import { Content } from './modules/Content/Content.lg';


export const Message :FC<IMessageProps> = () => {
  return (
    <>
      <Info/>      <Content/>
    </>
  );
};
