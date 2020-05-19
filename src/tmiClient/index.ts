import { client } from 'tmi.js';

import config from '../config';
import logger from '../logger';

export default () => {
  const tmiOptions = {
    channels: [config.channelName],
    connection: {
      reconnect: true,
      secure: true,
    },
    identity: {
      password: config.botPassword,
      username: config.botUsername,
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
