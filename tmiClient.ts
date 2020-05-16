import config from './src/config';
import { client } from 'tmi.js';
import logger from './src/logger';

export default async () => {
  const tmiOptions = {
    identity: {
      username: config.botUsername,
      password: config.botPassword,
    },
    channels: [config.channelName],
    connection: {
      reconnect: true,
      secure: true,
    },
    options: { debug: config.nodeEnv === 'development' },
  };

  const tmiClient = client(tmiOptions);

  tmiClient.on('disconnected', (reason) => {
    logger.info(`Disconnected: ${reason}`);
  });

  tmiClient.on('connected', (address, port) => {
    logger.info(`Connected to ${address}:${port}`);
  });

  tmiClient.on('reconnect', () => {
    logger.info(`Reconnected`);
  });

  return tmiClient;
};
