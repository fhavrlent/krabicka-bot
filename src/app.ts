import agendash from 'agendash';
import express from 'express';
import basicAuth from 'express-basic-auth';

import agenda from './agenda';
import config from './config';
import logger from './logger';
import tmiClient from './tmiClient';

const startServer = async () => {
  try {
    const app = express();
    const tmiClientInstance = await tmiClient();
    const agendaInstance = await agenda(tmiClientInstance);

    await tmiClientInstance.connect();
    await agendaInstance.start();

    app.use(
      '/',
      basicAuth({
        challenge: true,
        users: {
          [config.agendaUser]: config.agendaPassword,
        },
      }),
      agendash(agendaInstance),
    );
    app.listen(config.port);
    logger.info('Server has started 🚀');
  } catch (error) {
    logger.error(error);
  }
};

startServer();
