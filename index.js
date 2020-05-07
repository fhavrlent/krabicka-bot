const tmi = require('tmi.js');
require('dotenv').config();

const helpers = require('./helpers');

const {
  BOT_USERNAME,
  CHANNEL_NAME,

  OAUTH_TOKEN,
} = process.env;

const opts = {
  identity: {
    username: BOT_USERNAME,
    password: OAUTH_TOKEN,
  },
  channels: [CHANNEL_NAME],
};
const client = new tmi.client(opts);

client.on('connected', helpers.onConnectedHandler);

client.on('logon', () => {
  setTimeout(() => helpers.getKrabicka(client), 5000);
});

client.connect();

helpers.setSpammer(client);
