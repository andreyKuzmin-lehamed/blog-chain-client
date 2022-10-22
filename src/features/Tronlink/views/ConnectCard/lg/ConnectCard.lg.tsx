import React, { FC } from 'react';
import styles from './ConnectCard.lg.module.css';
import { IConnectCardProps } from './ConnectCard.lg.types';
import { ConnectButton } from './modules/ConnectButton/ConnectButton.lg';
import { DisconnectButton } from './modules/DisconnectButton/DisconnectButton.lg';
import { Status } from './modules/Status/Status.lg';


export const ConnectCard :FC<IConnectCardProps> = () => {
  return (
    <>
      <ConnectButton/>      <DisconnectButton/>      <Status/>
    </>
  );
};
