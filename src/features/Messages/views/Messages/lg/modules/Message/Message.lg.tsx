import React, { FC } from 'react';
import styles from './Message.lg.module.css';
import { IMessageProps } from './Message.lg.types';
import { Info } from './modules/Info/Info.lg';
import { Content } from './modules/Content/Content.lg';
import { BlogChainCardLayout } from 'src/library/layouts/card/BlogChainCardLayout';

export const Message: FC<IMessageProps> = ({ author, text }) => {
  return (
    <>
      <BlogChainCardLayout
        title={<Info author={author} />}
        content={<Content text={text} />}
      />
    </>
  );
};
