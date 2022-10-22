import { Avatar, Card, Switch } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { FC, useState } from 'react';
import styles from './BlogChainCardLayout.module.css';
import { IBlogChainCardLayoutProps } from './BlogChainCardLayout.types';

export const BlogChainCardLayout: FC<IBlogChainCardLayoutProps> = ({
  title,
  content,
}) => {
  const [loading, setLoading] = useState(false);

  const onChange = (checked: boolean) => {
    setLoading(!checked);
  };
  return (
    <>
      <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={title}
          description={content}
        />
      </Card>
    </>
  );
};
