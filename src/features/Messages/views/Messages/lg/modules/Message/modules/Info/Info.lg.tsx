import { PageHeader, Tag } from 'antd';
import React, { FC } from 'react';
import styles from './Info.lg.module.css';
import { IInfoProps } from './Info.lg.types';

export const Info: FC<IInfoProps> = ({ author }) => {
  return (
    <>
      <p>{author.wallet}</p>
    </>
  );
};
