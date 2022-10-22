import { PageHeader, Space, Tag } from 'antd';
import React, { FC, useEffect } from 'react';
import { MessagesThunks } from 'src/features/Messages/state/Messages.slice';
import { useAppDispatch, useAppSelector } from 'src/hooks/hooksRedux';
import styles from './Messages.lg.module.css';
import { IMessagesProps } from './Messages.lg.types';
import { Info } from './modules/Info/Info.lg';
import { Message } from './modules/Message/Message.lg';

export const MessagesLG: FC<IMessagesProps> = () => {
  const author = useAppSelector((state) => state.MessagesData.author);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(MessagesThunks.fetchAuthorMessages(author.wallet));
  }, []);
  const messages = useAppSelector((state) => state.MessagesData.messages);

  return (
    <>
      <Info author={author} />
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        {messages.map((message) => (
          <Message
            key={message.id}
            author={message.author}
            text={message.text}
          />
        ))}
      </Space>
    </>
  );
};
