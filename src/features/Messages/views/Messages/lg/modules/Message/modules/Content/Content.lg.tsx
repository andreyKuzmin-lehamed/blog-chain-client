import React, { FC } from 'react';
import styles from './Content.lg.module.css';
import { IContentProps } from './Content.lg.types';

export const Content: FC<IContentProps> = ({ text }) => {
  return (
    <>
      <p>{text}</p>
    </>
  );
};
