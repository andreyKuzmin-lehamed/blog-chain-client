import React, { FC } from 'react';
import styles from './Message.md.module.css';
import { IMessageProps } from './Message.md.types';
import { Info } from './modules/Info/Info.md';
import { Content } from './modules/Content/Content.md';


export const Message :FC<IMessageProps> = () => {
  return (
    <>
      <Info/>      <Content/>
    </>
  );
};
