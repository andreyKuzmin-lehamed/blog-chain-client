import React, { FC } from 'react';
import styles from './ConnectCard.md.module.css';
import { IConnectCardProps } from './ConnectCard.md.types';
import { ConnectButton } from './modules/ConnectButton/ConnectButton.md';
import { DisconnectButton } from './modules/DisconnectButton/DisconnectButton.md';
import { Status } from './modules/Status/Status.md';


export const ConnectCard :FC<IConnectCardProps> = () => {
  return (
    <>
      <ConnectButton/>      <DisconnectButton/>      <Status/>
    </>
  );
};
