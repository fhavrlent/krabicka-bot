import { createLogger, format, transports } from 'winston';
import Sentry from 'winston-transport-sentry-node';

import config from '../config';

const { combine, timestamp, printf } = format;

export const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

const logger = createLogger({
  format: combine(timestamp(), logFormat),
  level: 'info',
  transports: [
    new transports.File({
      dirname: `${__dirname}/../logs`,
      filename: 'logs.log',
    }),
  ],
});

if (config.nodeEnv !== 'production') {
  logger.add(
    new transports.Console({
      format: format.simple(),
    }),
  );
}

if (config.nodeEnv === 'production') {
  logger.add(
    new Sentry({
      level: 'warn',
      sentry: {
        dsn: config.sentryDsn,
        environment: config.nodeEnv,
      },
    }),
  );
}

export default logger;
