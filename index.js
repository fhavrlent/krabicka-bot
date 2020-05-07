const tmi = require('tmi.js');
require('dotenv').config();

const { onConnectedHandler, getBox, setBot: setBot } = require('./helpers');

const { BOT_USERNAME, CHANNEL_NAME, OAUTH_TOKEN } = process.env;

const opts = {
  identity: {
    username: BOT_USERNAME,
    password: OAUTH_TOKEN,
  },
  channels: [CHANNEL_NAME],
};

const client = new tmi.client(opts);

client.on('connected', onConnectedHandler);

client.on('logon', () => {
  setTimeout(() => getBox(client), 5000);
});

client.connect();

setBot(client);
