import { PageHeader, Tag } from 'antd';
import React, { FC } from 'react';
import styles from './Info.lg.module.css';
import { IInfoProps } from './Info.lg.types';

export const Info: FC<IInfoProps> = ({ author }) => {
  return (
    <PageHeader
      title={'Author'}
      className="site-page-header"
      subTitle={author.wallet}
      tags={<Tag color="blue">Actual Author</Tag>}
      avatar={{
        src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4',
      }}
    ></PageHeader>
  );
};
