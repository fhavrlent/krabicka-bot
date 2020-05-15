const tmi = require('tmi.js');
require('dotenv').config();
const Agenda = require('agenda');

const { onConnectedHandler, getIsOnline } = require('./helpers');

const { BOT_USERNAME, CHANNEL_NAME, OAUTH_TOKEN, MONGO } = process.env;

const opts = {
  identity: {
    username: BOT_USERNAME,
    password: OAUTH_TOKEN,
  },
  channels: [CHANNEL_NAME],
};

const client = new tmi.client(opts);

client.on('connected', onConnectedHandler);

const agenda = new Agenda({ db: { address: MONGO } });
agenda.define;

const getRandomTime = () => Math.random() * (240000 - 180000) + 180000;

agenda.define('get krabicka', async (job, done) => {
  const isOnline = await getIsOnline();

  await client.connect();
  if (isOnline) {
    setTimeout(() => {}, getRandomTime());
    await client.say(CHANNEL_NAME, '!krabicka');
    setTimeout(() => {}, 10000);
  }

  await client.disconnect();
  done();
});

agenda.start();
