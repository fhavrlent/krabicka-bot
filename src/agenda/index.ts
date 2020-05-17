import Agenda from 'agenda';

import { getIsOnline } from '../helpers';
import config from '../config';
import logger from '../logger';

export default (tmiClientInstance) => {
  const agenda = new Agenda({ db: { address: config.mongoDb } });

  agenda.define('get krabicka', async (job, done) => {
    try {
      logger.info(`Job is running`);
      const isOnline = await getIsOnline();
      if (!isOnline) {
        logger.info('Channel is offline, will try again in 1 hour');
        done();
        return;
      }
      tmiClientInstance.say(config.channelName, '!krabicka');
      //TODO: add check if we really got some krabicka
      logger.info('Krabicka hopefully acquired');
      done();
    } catch (error) {
      logger.error(error);
      done(error);
    }
  });

  return agenda;
};
