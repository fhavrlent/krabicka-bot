require('dotenv').config();

const {
  AGENDA_PASSWORD,
  AGENDA_USER,
  BOT_PASSWORD,
  BOT_USERNAME,
  CHANNEL_NAME,
  CLIENT_ID,
  CLIENT_SECRET,
  MONGO_DB,
  NODE_ENV,
  PORT,
  SENTRY_DSN,
} = process.env;

export default {
  agendaPassword: AGENDA_PASSWORD,
  agendaUser: AGENDA_USER,
  botPassword: BOT_PASSWORD,
  botUsername: BOT_USERNAME,
  channelName: CHANNEL_NAME,
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  mongoDb: MONGO_DB,
  nodeEnv: NODE_ENV,
  port: PORT,
  sentryDsn: SENTRY_DSN,
};
