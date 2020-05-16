import dotenv from 'dotenv';

dotenv.config();

const {
  BOT_PASSWORD,
  BOT_USERNAME,
  CHANNEL_NAME,
  CLIENT_ID,
  CLIENT_SECRET,
  MONGO_DB,
  NODE_ENV,
} = process.env;

export default {
  botPassword: BOT_PASSWORD,
  botUsername: BOT_USERNAME,
  channelName: CHANNEL_NAME,
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  mongoDb: MONGO_DB,
  nodeEnv: NODE_ENV,
};
