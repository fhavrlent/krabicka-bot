import tmiClient from './tmiClient';
import agenda from './agenda';
import logger from './logger';

const startServer = async () => {
  try {
    const tmiClientInstance = await tmiClient();
    const agendaInstance = await agenda(tmiClientInstance);

    await tmiClientInstance.connect();
    await agendaInstance.start();
    logger.info('Server has started 🚀');
  } catch (error) {
    logger.error(error);
  }
};

startServer();
